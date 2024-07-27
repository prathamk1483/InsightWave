import pandas as pd
import json
from django.utils.deprecation import MiddlewareMixin

class CSVLoaderMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if 'preprocess/' in request.path and request.method == 'POST':

            try:
                body = request.body.decode('utf-8')
                data = json.loads(body)
                url = data.get('link')
                
                if url:
                    request.csv_data = pd.read_csv(url)
                    print("CSV loaded successfully")

                else:
                    print("No link provided in request")

            except Exception as e:
                print(f"Error loading CSV: {e}")