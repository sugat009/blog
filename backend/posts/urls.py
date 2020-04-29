from django.conf.urls import url

from .views import catchall, PostDetail, PostCreate, PostList, PostUpdate, LikeView, FrontendError404

app_name = "posts"

urlpatterns = [
    url(r'^$', catchall),
    url(r'^posts/detail/(?P<pk>\d+)/$', PostDetail.as_view(), name="post_detail"),
    url(r'^posts/create/$', PostCreate.as_view(), name="post_create"),
    url(r'^posts/list/(?P<pk>\d+)/$', PostList.as_view(), name="post_list"),
    url(r'^posts/update/(?P<pk>\d+)/$', PostUpdate.as_view(), name="post_update"),

    url(r'^like/$', LikeView.as_view(), name="like_post"),

    url(r'^404/$', FrontendError404.as_view(), name="frontend_404"),
]
