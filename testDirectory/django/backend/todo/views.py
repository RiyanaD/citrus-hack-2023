from django.shortcuts import render

from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo
from django.http import HttpResponse
import subprocess

def articlerating(request):
    result = subprocess.run(['python', '/Users/rgujral/testDirectory/test.py'], capture_output=True, text=True)
    output = result.stdout
    return HttpResponse(output)

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

