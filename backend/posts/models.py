from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone


class DateTimeModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False, )
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True, )
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True

    def delete(self, *args, **kwargs):
        self.deleted_at = timezone.now()
        super().save()


class User(AbstractUser):
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    def get_full_name(self):
        return self.first_name+self.last_name

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.username


class Posts(DateTimeModel):
    title = models.TextField()
    content = models.TextField()
    image = models.ImageField(upload_to="images/", default="not_found.jpg")
    author = models.ForeignKey(User, related_name="post_user")
    liked_users = models.ManyToManyField(User, related_name="favorite_list", blank=True)

    class Meta:
        ordering = ["-created_at",]
        verbose_name = "Post"
        verbose_name_plural = "Posts"

    def __str__(self):
        return "Post by: {}".format(self.author)


class Comments(DateTimeModel):
    post = models.ForeignKey(Posts, related_name="post_comment")

    class Meta:
        ordering = ["-created_at",]
        verbose_name = "Comment"
        verbose_name_plural = "Comments"

    def __str__(self):
        return "Comment on {}".format(self.post.title)
