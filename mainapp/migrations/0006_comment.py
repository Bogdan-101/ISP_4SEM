# Generated by Django 3.2 on 2021-05-06 12:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0005_alter_thread_blog_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(unique=True)),
                ('content', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='blog_posts/')),
                ('pub_date', models.DateTimeField(auto_now=True)),
                ('related_thread', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.thread', verbose_name='Имя треда')),
            ],
        ),
    ]