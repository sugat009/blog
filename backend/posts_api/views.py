from posts.models import Posts

from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.generics import RetrieveAPIView, ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import *


# LoginView
class LoginView(ObtainAuthToken):
    serializer_class = CustomAuthTokenSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
            'email': user.email,
            'id': user.id,
        })


# Signup View
class SignupView(APIView):
    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                token = Token.objects.create(user=user)
                json = serializer.data
                json['token'] = token.key
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# get user api
class GetUserApi(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)


# Post ListCreateView
class PostListViewApi(ListCreateAPIView):
    queryset = Posts.objects.filter(
        deleted_at__isnull=True).order_by('-created_at')
    serializer_class = PostsSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)


# get user posts only API
class UserPostListAPIView(ListAPIView):
    serializer_class = PostsSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Posts.objects.filter(deleted_at__isnull=True, author_id=self.kwargs['pk'])


# Post Update Retrieve Destroy View
class PostUpdateRetriveDestroyView(RetrieveUpdateDestroyAPIView):
    serializer_class = PostsSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def dispatch(self, request, *args, **kwargs):
        self.posts = Posts.objects.filter(
            deleted_at__isnull=True, author_id=kwargs.get("user_id"))
        return super().dispatch(request, *args, **kwargs)

    def get_queryset(self, *args, **kwargs):
        return self.posts


# Post like API
class PostLikeView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request, format=None):
        data = request.data
        try:
            user_id = request.data['user_id']
            post_id = request.data['post_id']
            post = Posts.objects.get(pk=post_id)
            user = User.objects.get(pk=user_id)
            if user in post.liked_users.all():
                post.liked_users.remove(user)
                action = "unliked"
            else:
                post.liked_users.add(user)
                action = "liked"
            post.save()
            return Response({"msg": "success", "status": action}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)
