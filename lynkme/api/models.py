from django.db import models
from django.contrib.auth.models import User
import random
class BaseClass(models.Model):
    created_at = models.DateTimeField(auto_now = True)

class CustomUser(BaseClass):
    user = models.ForeignKey(User, on_delete = models.SET_NULL, null=True)
    

def get_random_code():
    code = random.randint(000000,999999)
    return code

class Zone(models.Model):
    zone_num = models.CharField(max_length = 6, default = " ", unique = True, blank=True)
    def save(self, *args, **kwargs):
        code = get_random_code()
        if Zone.objects.filter(zone_num = code).exists():
            get_random_code()
        self.zone_num = code
        return super().save(*args, **kwargs)
    def __str__(self) -> str:

        return f'{self.zone_num}'