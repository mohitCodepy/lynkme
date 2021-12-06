# Generated by Django 3.2.7 on 2021-12-05 20:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='BaseClass',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Zone',
            fields=[
                ('baseclass_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='api.baseclass')),
                ('zone_num', models.CharField(blank=True, default=' ', max_length=6, unique=True)),
                ('host', models.CharField(default='', max_length=50)),
                ('guest_can_pause', models.BooleanField(default=False)),
                ('votes_to_skip', models.PositiveSmallIntegerField(default=1)),
            ],
            bases=('api.baseclass',),
        ),
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('baseclass_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='api.baseclass')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            bases=('api.baseclass',),
        ),
    ]