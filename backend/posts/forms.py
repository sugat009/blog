from django import forms

from .models import *


class PostCreateForm(forms.ModelForm):
    class Meta:
        model = Posts
        fields = ["title", "content", "image",]
        widgets = {
            "title": forms.TextInput(attrs={
                "class": "form-control",
                'placeholder': 'Post Title',
                "required": "true",
            }),
            "content": forms.Textarea(attrs={
                "class": "form-contorl",
                "placeholder": "Post Content",
                "required": "true",
            }),
        }


class PostDeleteForm(forms.ModelForm):
    class Meta:
        model = Posts
        fields = ['deleted_at']
        widgets = {
            'deleted_at': forms.HiddenInput(),
        }
