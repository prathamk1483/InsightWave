from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
import pandas as pd
from io import StringIO

@api_view(["POST"])
def nullvalues(request):
    if "csv_data" in request.session:
        data = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        response = data.isnull().sum()
        finalresponse = {
            "processed" : response.to_dict(),
            "columns" : request.session["data_columns"]
        }
        return Response(finalresponse)

    return Response("Failed @nullvaluesbypercentage by Django-restframework")

@api_view(["POST"])
def nullvaluesbypercentage(request):
    if "csv_data" in request.session:
        data = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        response = (data.isnull().sum()) / len(data) *100
        finalresponse = {
            "processed" : response.to_dict(),
            "columns" : request.session["data_columns"]
        }
        return Response(finalresponse)

    return Response("Failed @nullvaluesbypercentage by Django-restframework")

@api_view(["POST"])
def datadescription(request):
    if "csv_data" in request.session:
        data = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        response = data.describe()
        finalresponse = {
            "processed" : response.to_dict(),
            "columns" : request.session["data_columns"]
        }
        return Response(finalresponse)
    return Response("Failed @nullvaluesbypercentage by Django-restframework")