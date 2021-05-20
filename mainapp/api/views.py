from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

from .serializers import (BoardSerializer,
                          ThreadSerializer,
                          ThreadRetrieveSerializer,
                          BoardDetailSerializer,
                          CommentSerializer
                          )
from ..models import Board, Thread, Comment


class BoardViewSet(viewsets.ModelViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

    action_to_serializer = {
        "retrieve": BoardDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class ThreadViewSet(viewsets.ModelViewSet):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer

    action_to_serializer = {
        "list": ThreadRetrieveSerializer,
        "retrieve": ThreadRetrieveSerializer
    }

    def create(self, request, *args, **kwargs):
        thread_data = request.data

        serializer = ThreadSerializer(data=thread_data)
        if serializer.is_valid():
            board = Board.objects.filter(name=thread_data["board_name"])
            threads_count = Thread.objects.filter(blog_category_id=str(board[0].id)).count() + 1
            new_thread = Thread(blog_category=board[0], title=thread_data["title"],
                                slug=str(str(board[0].slug) + "-" + str(threads_count)),
                                content=thread_data["content"])
            new_thread.save()
            return Response(ThreadSerializer(new_thread).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def create(self, request, *args, **kwargs):
        comment_data = request.data

        serializer = CommentSerializer(data=comment_data)
        if serializer.is_valid():
            related_thread = Thread.objects.filter(id=comment_data["id"]).first()
            new_comment = Comment(related_thread=related_thread, content=comment_data["content"])
            new_comment.save()
            return Response(CommentSerializer(new_comment).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
