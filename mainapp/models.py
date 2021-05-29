from django.db import models
from users.models import User
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import sys

class Board(models.Model):
    name = models.CharField(max_length=255, verbose_name='Имя категории')
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class ThreadQuerySet(models.QuerySet):

    def find_by_title(self, post_title):
        return self.filter(title__icontains=post_title)


class ThreadManager(models.Manager):

    def get_queryset(self):
        return ThreadQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().filter(in_archive=False)

    def find_by_title(self, post_title):
        return self.get_queryset().find_by_title(post_title)


class Thread(models.Model):
    blog_category = models.ForeignKey(Board, verbose_name="Имя категории", on_delete=models.CASCADE, blank=True)
    owner = models.ForeignKey(User, blank=True, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=255, verbose_name="Название")
    slug = models.SlugField(unique=True, blank=True)
    content = models.TextField()
    image = models.ImageField(upload_to='./', blank=True, null=True)
    compressed_image = models.ImageField(blank=True, null=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    in_archive = models.BooleanField(default=False)
    objects = ThreadManager()
    is_blessed = models.BooleanField(default=False, null=True)

    def save(self, *args, **kwargs):
        if not self.id and self.image:
            self.compressed_image = self.compressImage(self.image)
        super(Thread, self).save(*args, **kwargs)

    def compressImage(self, uploadedImage):
        imageTemproary = Image.open(uploadedImage)
        imageTemproary = imageTemproary.convert('RGB')
        outputIoStream = BytesIO()
        imageTemproaryResized = imageTemproary.resize((1020, 573))
        imageTemproary.save(outputIoStream, format='JPEG', quality=20)
        outputIoStream.seek(0)
        uploadedImage = InMemoryUploadedFile(outputIoStream, 'ImageField', "%s_compressed.jpg" % uploadedImage.name.split('.')[0],
                                             'image/jpeg', sys.getsizeof(outputIoStream), None)
        return uploadedImage

    def __str__(self):
        return f"{self.title} из категории \"{self.blog_category.name}\""


class Comment(models.Model):
    related_thread = models.ForeignKey(Thread, verbose_name="Имя треда", on_delete=models.CASCADE,
                                       related_name="comments", blank=True)
    related_board = models.ForeignKey(Board, verbose_name="Имя борды", on_delete=models.CASCADE,
                                      related_name="comments_related_board", blank=True, null=True)
    content = models.TextField()
    image = models.ImageField(upload_to='./', blank=True, null=True)
    compressed_image = models.ImageField(blank=True, null=True)
    owner = models.ForeignKey(User, blank=True, on_delete=models.CASCADE, null=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(unique=True, blank=True)
    is_blessed = models.BooleanField(default=False, null=True)

    def save(self, *args, **kwargs):
        if self.image and not self.id:
            self.compressed_image = self.compressImage(self.image)
        super(Comment, self).save(*args, **kwargs)

    def compressImage(self, uploadedImage):
        imageTemproary = Image.open(uploadedImage)
        imageTemproary = imageTemproary.convert('RGB')
        outputIoStream = BytesIO()
        imageTemproaryResized = imageTemproary.resize((1020, 573))
        imageTemproary.save(outputIoStream, format='JPEG', quality=20)
        outputIoStream.seek(0)
        uploadedImage = InMemoryUploadedFile(outputIoStream, 'ImageField', "%s_compressed.jpg" % uploadedImage.name.split('.')[0],
                                             'image/jpeg', sys.getsizeof(outputIoStream), None)
        return uploadedImage


    class Meta:
        ordering = ('pub_date',)

    def __str__(self):
        return f"comment from thread " + self.related_thread.title
