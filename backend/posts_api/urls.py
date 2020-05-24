from django.conf.urls import url

from .views import LoginView, SignupView, GetUserApi, PostListViewApi, PostUpdateRetriveDestroyView, UserPostListAPIView, PostLikeView

urlpatterns = [
    url(r'^login/', LoginView.as_view(), name='login'),
    url(r'^signup/', SignupView.as_view(), name="signup"),

    url(r'^get/user/(?P<pk>\d+)/$', GetUserApi.as_view(), name="get_user"),

    # for all posts
    url(r'^posts/list/$', PostListViewApi.as_view(), name="posts_list"),

    # for detail update and delete
    url(r'^posts/detail/(?P<pk>\d+)/(?P<user_id>\d+)/$',
        PostUpdateRetriveDestroyView.as_view(), name="posts_detail"),

    # for user post list
    url(r'posts/user/list/(?P<pk>\d+)/$',
        UserPostListAPIView.as_view(), name="user_posts_list"),

    url(r'^posts/like/$', PostLikeView.as_view(), name="post_like"),
]
