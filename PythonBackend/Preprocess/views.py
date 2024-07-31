from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
import pandas as pd
import json
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

@api_view(["POST"])
def dropcol(request):
    if "csv_data" in request.session:
        body = request.body.decode('utf-8')
        data = json.loads(body)
        cols = data.get('cols')
        print("Columns received:", cols)
        
        # Load DataFrame from session data
        df = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))

        # Drop specified columns
        if cols:
            df.drop(columns=list(cols), axis=1, inplace=True)
        
        # Save updated DataFrame back to session
        request.session["csv_data"] = df.to_json(orient='split')
        
        return Response("Dropped given columns successfully")
    
    return Response("Failed while dropping columns from the dataset")