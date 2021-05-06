from django.shortcuts import render


def index(req):
    return render(req, 'index.html', {})


def board_detail(req, id):
    return render(req, 'index.html', {})


def thread_detail(req, id):
    return render(req, 'index.html', {})
