from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.decorators import api_view
from io import StringIO,BytesIO
import pandas as pd
import matplotlib.pyplot as plt
import cloudinary.uploader
from io import StringIO
import json
import matplotlib
import seaborn as sns
matplotlib.use('Agg')


@api_view(["POST"])
def index(request):
    if request.method == "POST":
        data = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        print(data.head())
        return Response("On the Visualize.view.index file , the above is the data received")
    return HttpResponse("Ran the index file")


@api_view(["POST"])
def histogram(request):
    if request.method == "POST":
        body = request.body.decode('utf-8')
        data = json.loads(body)
        cols = data.get('cols')
        data = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        
        plt.hist(data[f"{cols}"], bins=30, color='skyblue', edgecolor='black')
        plt.xlabel(f'{cols}')
        plt.ylabel('Frequency')
        plt.title('Basic Histogram')

        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        plt.close()
        buffer.seek(0)

        response = cloudinary.uploader.upload(buffer, folder="histograms/")
        
        response = response.get('secure_url')

        finalresponse = {
            "processed" : response,
            "cols" : cols,
        }

        return Response(finalresponse)


    return Response({"message":"Getting the histogram of the image"})



'''             !!!!!!!!!!!!                        THE BELOW CODE IS AI GENERATED                    '''


@api_view(["POST"])
def correlation_heatmap(request):
    if "csv_data" in request.session:
        data = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        plt.figure(figsize=(10, 8))
        sns.heatmap(data.corr(), annot=True, cmap='coolwarm')
        plt.title('Correlation Heatmap')

        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        plt.close()
        buffer.seek(0)

        response = cloudinary.uploader.upload(buffer, folder="heatmaps/")
        url = response['secure_url']

        return Response({"url": url})

    return Response("Failed to generate heatmap")


@api_view(["POST"])
def pairplot(request):
    if "csv_data" in request.session:
        data = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        sns.pairplot(data)
        plt.title('Pairplot')

        # Save the plot to a file
        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        plt.close()
        buffer.seek(0)

        response = cloudinary.uploader.upload(buffer, folder="Pairplots/")
        url = response['secure_url']

        return Response({"url": url})

    return Response("Failed to generate pairplot")



@api_view(["POST"])
def boxplot(request):
    if "csv_data" in request.session:
        body = request.body.decode('utf-8')
        data = json.loads(body)
        column = data.get('cols')

        data = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        sns.boxplot(data[column])
        plt.title(f'Boxplot of {column}')

        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        plt.close()
        buffer.seek(0)

        response = cloudinary.uploader.upload(buffer, folder="BoxPlots/")
        url = response['secure_url']

        return Response({"url": url})

    return Response("Failed to generate boxplot")




@api_view(["POST"])
def scatterplot(request):
    if "csv_data" in request.session:
        body = request.body.decode('utf-8')
        data = json.loads(body)
        x_col = data.get('x_col')
        y_col = data.get('y_col')

        data = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        sns.scatterplot(x=data[x_col], y=data[y_col])
        plt.xlabel(x_col)
        plt.ylabel(y_col)
        plt.title(f'Scatter Plot of {x_col} vs {y_col}')

        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        plt.close()
        buffer.seek(0)

        response = cloudinary.uploader.upload(buffer, folder="ScatterPlot/")
        url = response['secure_url']

        return Response({"url": url})

    return Response("Failed to generate scatterplot")
