from django import template

from posts.models import *

register = template.Library()

@register.simple_tag
def check_like(post, user):
    if User.objects.get(pk=user) in post.liked_users.all():
        return "s"
    else:
        return "r"
