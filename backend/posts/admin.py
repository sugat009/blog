from django.contrib import admin
from .models import *
from django.apps import apps
from django.contrib.admin.sites import AlreadyRegistered

for pn_model in apps.get_app_config('posts').get_models():
    try:
        admin.site.register(pn_model)
    except AlreadyRegistered:
        pass
