from rest_framework.response import Response
from rest_framework.decorators import api_view
import pandas as pd
import json
from io import StringIO
from sklearn.preprocessing import StandardScaler, MinMaxScaler, RobustScaler
from django.http import JsonResponse
import cloudinary.uploader

@api_view(["POST"])
def nullvalues(request):
    if "csv_data" in request.session:
        data = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        response = data.isnull().sum()
        finalresponse = {
            "Dataset" : response.to_dict(),
            "Columns" : request.session["data_columns"],
            "Message" : "Success"
        }
        return Response(finalresponse)

    return Response("Failed @nullvaluesbypercentage by Django-restframework")

@api_view(["POST"])
def nullvaluesbypercentage(request):
    if "csv_data" in request.session:
        data = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        response = (data.isnull().sum()) / len(data) *100
        finalresponse = {
            "Drocessed" : response.to_dict(),
            "Columns" : request.session["data_columns"],
            "Message" : "Success"
        }
        return Response(finalresponse)

    return Response({"Message":"Failed @nullvaluesbypercentage by Django-restframework"})

@api_view(["POST"])
def datadescription(request):
    if "csv_data" in request.session:
        data = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        response = data.describe()
        finalresponse = {
            "processed" : response.to_dict(),
            "Columns" : request.session["data_columns"],
            "Message" : "Success"
        }
        return Response(finalresponse)
    return Response({"Message":"Failed @nullvaluesbypercentage by Django-restframework"})

@api_view(["POST"])
def dropcol(request):
    if "csv_data" in request.session:
        body = request.body.decode('utf-8')
        data = json.loads(body)
        cols = data.get('cols')

        df = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))

        if cols:
            try:
                for i in cols:
                    df.drop(columns=list(i), axis=1, inplace=True)
                    request.session["csv_data"] = df.to_json(orient='split')

            except:
                return Response({"Message":"Maybe Some columns were missing"})

        print(df.head())        
        return Response({"Message":"Dropped given columns successfully"})
    
    return Response({"Message":"Failed while dropping columns from the dataset"})



'''             !!!!!!!!!!!!                         THE BELOW CODE IS AI GENERATED                      '''


@api_view(["POST"])
def fillmissingvalues(request):
    if "csv_data" in request.session:
        body = request.body.decode('utf-8')
        data = json.loads(body)
        fill_value = data.get('fill_value', None)
        method = data.get('method', None)
        columns = data.get('cols', None)
        
        df = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        
        if fill_value is not None:
            df[columns] = df[columns].fillna(fill_value)
        elif method == 'mean':
            df[columns] = df[columns].fillna(df[columns].mean())
        elif method == 'median':
            df[columns] = df[columns].fillna(df[columns].median())
        elif method == 'mode':
            df[columns] = df[columns].fillna(df[columns].mode().iloc[0])
        elif method == 'ffill':
            df[columns] = df[columns].fillna(method='ffill')
        elif method == 'bfill':
            df[columns] = df[columns].fillna(method='bfill')
        
        request.session["csv_data"] = df.to_json(orient='split')
        return Response("Filled missing values successfully")
    
    return Response("Failed while filling missing values")


@api_view(["POST"])
def onehotencode(request):
    if "csv_data" in request.session:
        body = request.body.decode('utf-8')
        data = json.loads(body)
        columns = data.get('cols', None)
        
        df = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        
        if columns:
            df = pd.get_dummies(df, columns=columns)
        
        request.session["csv_data"] = df.to_json(orient='split')
        return Response("One-hot encoded columns successfully")
    
    return Response("Failed while one-hot encoding columns")




@api_view(["POST"])
def scale_features(request):
    if "csv_data" in request.session:
        body = request.body.decode('utf-8')
        data = json.loads(body)
        columns = data.get('cols', None)
        method = data.get('method', 'standard')
        
        df = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        
        if columns:
            if method == 'standard':
                scaler = StandardScaler()
            elif method == 'minmax':
                scaler = MinMaxScaler()
            elif method == 'robust':
                scaler = RobustScaler()
            else:
                return Response({"Message":f"Maybe Invalid scaling method given"})
            
            df[columns] = scaler.fit_transform(df[columns])
        
        request.session["csv_data"] = df.to_json(orient='split')
        return Response({"Message":f"Scaled the {columns} using {method} successfully"})
    
    return Response({"Message":"Failed while scaling features"})


@api_view(["POST"])
def download_processed_csv(request):
    if "csv_data" in request.session:
        df = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        
        csv_buffer = StringIO()
        df.to_csv(csv_buffer, index=False)
        csv_buffer.seek(0)
        
        response = cloudinary.uploader.upload_large(csv_buffer, resource_type="raw", format="csv")
        csv_url = response['url'].replace('/upload/', '/upload/fl_attachment/')
        
        return Response({
            "url": csv_url, 
            "Message": "CSV uploaded successfully"
        })
    
    return Response({"Message": "Failed to upload CSV"})