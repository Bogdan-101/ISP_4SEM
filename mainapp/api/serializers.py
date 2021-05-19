from rest_framework import serializers

from ..models import Thread, Board, Comment


class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = '__all__'


class BoardDetailSerializer(serializers.ModelSerializer):
    posts = serializers.SerializerMethodField()

    class Meta:
        model = Board
        fields = '__all__'

    @staticmethod
    def get_posts(obj):
        return ThreadSerializer(Thread.objects.filter(blog_category=obj), many=True).data


class ThreadSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField()

    class Meta:
        model = Thread
        fields = '__all__'

    @staticmethod
    def get_comments(obj):
        return CommentSerializer(Comment.objects.filter(related_thread=obj), many=True).data


class ThreadRetrieveSerializer(serializers.ModelSerializer):
    blog_category = BoardSerializer()
    comments = serializers.SerializerMethodField()

    class Meta:
        model = Thread
        fields = '__all__'

    @staticmethod
    def get_comments(obj):
        return CommentSerializer(Comment.objects.filter(related_thread=obj), many=True).data


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
