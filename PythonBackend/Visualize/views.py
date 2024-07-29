from rest_framework.response import Response
from rest_framework.decorators import api_view
from io import StringIO,BytesIO
import pandas as pd
import matplotlib.pyplot as plt
import cloudinary.uploader
import base64
import json

# Create your views here.

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