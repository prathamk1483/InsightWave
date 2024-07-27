from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(["POST"])
def nullvalues(request):
    if hasattr(request, 'csv_data'):
        data = request.csv_data
        response = data.isnull().sum().to_dict()
        return Response(response)
    return HttpResponse("<h1>CSV data not found<h1/>")

@api_view(["POST"])
def nullvaluesbypercentage(request):
    if hasattr(request, 'csv_data'):
        data = request.csv_data
        response = (data.isnull().sum() / len(data) * 100).to_dict()
        return Response(response)
    return HttpResponse("<h1>CSV data not found<h1/>")