from django.shortcuts import render
from django.http import HttpResponse
import subprocess

# Create your views here.

def front(request):
   result = subprocess.run(['python', '/Users/chon/Desktop/CITRUS HACK 23/citrus-hack/citrus-hack-2023/model/test.py'], capture_output=True, text=True)
   output = result.stdout
   return HttpResponse(output)
                           