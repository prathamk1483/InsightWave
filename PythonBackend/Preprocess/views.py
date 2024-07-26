from django.shortcuts import render
from django.http import HttpResponse
import rest_framework
from rest_framework.response import Response
from rest_framework.decorators import api_view
import pandas as pd


# Create your views here.
@api_view(["POST","GET"])
def nullvalues(request):
    if(request.method == "POST"):
        url=request.data["link"]
        data = pd.read_csv(url)
        response = data.isnull().sum().to_dict()

        return Response(response)
    return HttpResponse("<h1>Welcome to the InsightWave Django Backend<h1/>")