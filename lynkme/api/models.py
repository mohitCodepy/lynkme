from django.db import models
from django.contrib.auth.models import User

class BaseClass(models.Model):
    created_at = models.DateTimeField(auto_now = True)

class CustomUser(BaseClass):
    user = models.ForeignKey(User, on_delete = models.SET_NULL, null=True)
    