from rest_framework import serializers

from ..models import Thread, Board


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

    class Meta:
        model = Thread
        fields = '__all__'


class ThreadRetrieveSerializer(serializers.ModelSerializer):

    blog_category = BoardSerializer()

    class Meta:
        model = Thread
        fields = '__all__'
