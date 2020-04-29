from django.shortcuts import render
from django.views.generic import *
from django.http import HttpResponse, JsonResponse

from braces.views import SuperuserRequiredMixin, LoginRequiredMixin

from .models import *
from .forms import *


catchall = TemplateView.as_view(template_name="index.html")

class HomePage(LoginRequiredMixin, ListView):
    template_name = "posts/index.html"
    model = Posts
    queryset = Posts.objects.filter(deleted_at__isnull=True)


class PostDetail(LoginRequiredMixin, DetailView):
    template_name = "posts/post_detail.html"
    model = Posts
    queryset = Posts.objects.filter(deleted_at__isnull=True)


class LikeView(LoginRequiredMixin, View):

    def post(self, request, *args, **kwargs):
        try:
            post_id = request.POST.get("post_id")
            user_id = request.POST.get("user")
            post = Posts.objects.get(id=post_id)
            user = User.objects.get(id=user_id)
            status = ""
            if user in post.liked_users.all():
                post.liked_users.remove(user)
                status = "unliked"
            else:
                post.liked_users.add(user)
                status = "liked"
            post.save()
            return JsonResponse({"msg": "success", "status": status})
        except Exception as e:
            print(e, 121212121212)
            return JsonResponse({"msg": "error"})


class PostCreate(LoginRequiredMixin, CreateView):
    template_name = "posts/create_posts.html"
    model = Posts
    form_class = PostCreateForm
    success_url = "/"
    success_message = "Post Created Successfully!"

    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.author = User.objects.get(pk=self.request.user.id)
        obj.save()
        return super().form_valid(form)


class PostList(LoginRequiredMixin, ListView):
    template_name = "posts/post_list.html"
    model = Posts

    def get_queryset(self):
        return Posts.objects.filter(deleted_at__isnull=True, author=User.objects.get(id=self.kwargs['pk'])).order_by('-created_at')


class PostUpdate(LoginRequiredMixin, UpdateView):
    template_name = "posts/create_posts.html"
    model = Posts
    form_class = PostCreateForm
    success_url = "/"
    success_message = "Post Created Successfully!"

    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.author = User.objects.get(pk=self.request.user.id)
        obj.save()
        return super().form_valid(form)


class FrontendError404(TemplateView):
    template_name= "posts/404.html"
