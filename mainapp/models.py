from django.db import models


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
    blog_category = models.ForeignKey(Board, verbose_name="Имя категории", on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name="Название")
    slug = models.SlugField(unique=True)
    content = models.TextField()
    image = models.ImageField(upload_to='blog_posts/', blank=True, null=True)
    pub_date = models.DateTimeField(auto_now=True)
    in_archive = models.BooleanField(default=False)
    objects = ThreadManager()

    def __str__(self):
        return f"{self.title} из категории \"{self.blog_category.name}\""


class Comment(models.Model):
    related_thread = models.ForeignKey(Thread, verbose_name="Имя треда", on_delete=models.CASCADE)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    image = models.ImageField(upload_to='blog_posts/', blank=True, null=True)
    pub_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"comment from board \"{self.related_board.name}\" and thread " + self.related_thread.title
