from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.utils.translation import ugettext_lazy as _

from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from posts.models import *


class CustomAuthTokenSerializer(serializers.Serializer):
    username = serializers.CharField(label=_("Username"), style={'input_type': 'username/email'})
    password = serializers.CharField(
        label=_("Password"),
        style={'input_type': 'password'},
        trim_whitespace=False
    )

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')
        if (username) and password:
            user = None
            if username:
                user = authenticate(request=self.context.get('request'),
                                username=username, password=password)
            if not user:
                temp_user = User.objects.filter(email=username).first()
                if temp_user:
                    user = authenticate(request=self.context.get('request'),
                                    username=temp_user.username, password=password)
            if not user or not user.is_active:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = _('Must include "username" or "email" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs


class PostsSerializer(serializers.ModelSerializer):
    author_email = serializers.ReadOnlyField(source="author.email")
    author_username = serializers.ReadOnlyField(source="author.username")

    class Meta:
        model = Posts
        fields = (
            "id",
            "title",
            "content",
            "image",
            "author",
            "author_email",
            "author_username",
            "created_at",
            "updated_at",
            "deleted_at",
            "liked_users",
            )


class UserSerializer(serializers.ModelSerializer):
    post_user = serializers.PrimaryKeyRelatedField(
        many=True,
        read_only=True
    )

    class Meta:
        model = User
        fields = ["id", "username", "email",  "post_user",]

    def get_id(self, user):
        return user.id if user.id else None


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)
    email = serializers.EmailField(required = True, validators = [UniqueValidator(queryset=User.objects.all())])
    username = serializers.CharField(validators = [UniqueValidator(queryset=User.objects.all())])

    class Meta:
        model = User
        fields = ["id", "username", "email", "password",]

    def create(self, validated_data):
        user = User.objects.create(
            username = validated_data['username'],
            email = validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
