from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import (BoardSerializer,
                          ThreadSerializer,
                          ThreadRetrieveSerializer,
                          BoardDetailSerializer
                          )
from ..models import Board, Thread


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
        board = Board.objects.filter(name=thread_data["board_name"])
        threads_count = Thread.objects.filter(blog_category_id=str(board[0].id)).count() + 1
        new_thread = Thread(blog_category=board[0], title=thread_data["title"],
                            slug=str(str(board[0].slug) + "-" + str(threads_count)),
                            content=thread_data["content"])

        new_thread.save()

        serializer = ThreadSerializer(new_thread)

        return Response(serializer.data)

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
