# Generated by Django 3.2 on 2021-05-26 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0007_thread_is_blessed'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='is_blessed',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
