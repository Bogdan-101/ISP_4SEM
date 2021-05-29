from rest_framework import viewsets
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

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
    permission_classes = (IsAuthenticated,)

    action_to_serializer = {
        "list": ThreadRetrieveSerializer,
        "retrieve": ThreadRetrieveSerializer
    }

    def create(self, request, *args, **kwargs):
        thread_data = request.data

        serializer = ThreadSerializer(data=thread_data)
        if serializer.is_valid():
            board = Board.objects.filter(name=thread_data["board_name"]).first()
            threads_count = Thread.objects.filter(blog_category_id=str(board.id)).count() + Comment.objects.filter(
                related_board_id=str(board.id)).count() + 1
            if 'image' in thread_data:
                new_thread = Thread(blog_category=board, title=thread_data["title"],
                                    slug=str(str(board.slug) + "-" + str(threads_count)), owner=request.user,
                                    content=thread_data["content"], image=thread_data["image"])
                new_thread.save()
            else:
                new_thread = Thread(blog_category=board, title=thread_data["title"],
                                    slug=str(str(board.slug) + "-" + str(threads_count)), owner=request.user,
                                    content=thread_data["content"])
                new_thread.save()

            return Response(ThreadSerializer(new_thread).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        updating_thread = Thread.objects.get(pk=kwargs['pk'])
        updating_thread.is_blessed = request.data["is_blessed"]
        updating_thread.save()
        return Response(status=status.HTTP_200_OK)

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticated,)

    def create(self, request, *args, **kwargs):
        comment_data = request.data

        serializer = CommentSerializer(data=comment_data)
        if serializer.is_valid():
            related_thread = Thread.objects.filter(id=comment_data["id"]).first()
            board_name = related_thread.blog_category.slug
            comment_count = Thread.objects.filter(
                blog_category_id=str(related_thread.blog_category.id)).count() + Comment.objects.filter(
                related_board_id=str(related_thread.blog_category.id)).count() + 1
            if 'image' in comment_data:
                new_comment = Comment(related_thread=related_thread, content=comment_data["content"],
                                      owner=request.user,
                                      slug=str(board_name + "-" + str(comment_count)),
                                      related_board=related_thread.blog_category, image=comment_data["image"])
                new_comment.save()
            else:
                new_comment = Comment(related_thread=related_thread, content=comment_data["content"],
                                      owner=request.user,
                                      slug=str(board_name + "-" + str(comment_count)),
                                      related_board=related_thread.blog_category)
                new_comment.save()
            return Response(CommentSerializer(new_comment).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        updating_comment = Comment.objects.get(pk=kwargs['pk'])
        updating_comment.is_blessed = request.data["is_blessed"]
        updating_comment.save()
        return Response(status=status.HTTP_200_OK)
