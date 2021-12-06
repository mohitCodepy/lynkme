from django.db import models
from django.contrib.auth.models import User
import random
import string

class BaseClass(models.Model):
    created_at = models.DateTimeField(auto_now = True)

class CustomUser(BaseClass):
    user = models.ForeignKey(User, on_delete = models.SET_NULL, null=True)
    

def get_random_code():
    code = ''.join(random.choices(string.ascii_uppercase, k = 6))
    return code

class Zone(BaseClass):
    zone_num = models.CharField(max_length = 6, default = " ", unique = True, blank=True)
    host = models.CharField(max_length = 50, default = '', blank=True, unique = True)
    guest_can_pause = models.BooleanField(default = False)
    votes_to_skip = models.PositiveSmallIntegerField(default = 1)


    def save(self, *args, **kwargs):
        code = get_random_code()
        if Zone.objects.filter(zone_num = code).exists():
            get_random_code()
        self.zone_num = code
        return super().save(*args, **kwargs)
    def __str__(self) -> str:

        return f'{self.zone_num}'