from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from io import StringIO,BytesIO
import pandas as pd
from ydata_profiling import ProfileReport
import cloudinary.uploader
from django.views.decorators.csrf import csrf_exempt
from xhtml2pdf import pisa
import os

@api_view(["POST"])
def GenerateReport(request):
    try:
        # Read the CSV data from the session
        df = pd.DataFrame(pd.read_json(StringIO(request.session["csv_data"]), orient='split'))

        # Generate the profile report
        profile = ProfileReport(df, title="EDA Report")
        report_html = profile.to_html()

        # Save the HTML report to a BytesIO buffer
        html_buffer = BytesIO()
        html_buffer.write(report_html.encode('utf-8'))
        html_buffer.seek(0)

        # Upload the HTML report to Cloudinary
        upload_result = cloudinary.uploader.upload(html_buffer, resource_type='raw', folder="EDA_Reports/", format="html")
        html_url = upload_result.get('secure_url')

        return Response({"html_url": html_url}, status=200)

    except Exception as e:
        return Response({"error": str(e)}, status=500)