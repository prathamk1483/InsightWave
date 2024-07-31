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
        # Read CSV data from session
        body = request.body.decode('utf-8')
        data = json.loads(body)
        cols = data.get('cols')
        data = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))
        
        # Create a histogram
        plt.hist(data[f"{cols}"], bins=30, color='skyblue', edgecolor='black')
        plt.xlabel(f'{cols}')
        plt.ylabel('Frequency')
        plt.title('Basic Histogram')
        
        # Save the histogram to a BytesIO object
        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        plt.close()
        buffer.seek(0)
        
        # Upload the image to Cloudinary
        response = cloudinary.uploader.upload(buffer, folder="histograms/")
        
        # Get the URL of the uploaded image
        response = response.get('secure_url')
        
        # Return the image URL in the response
        finalresponse = {
            "processed" : response,
            "cols" : cols,
        }

        return Response(finalresponse)


    return Response({"message":"Getting the histogram of the image"})