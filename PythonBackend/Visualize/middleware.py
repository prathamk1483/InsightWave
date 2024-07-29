import pandas as pd
import json
from django.utils.deprecation import MiddlewareMixin

class CSVLoaderMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if 'visualize/' in request.path and request.method == 'POST':
            body = request.body.decode('utf-8')
            data = json.loads(body)
            URL = data.get('link')

            if 'csv_data' not in request.session:
                url = URL
                if url:
                    data = pd.DataFrame(pd.read_csv(url))
                    print("Reading a new CSV File from the given link")
                    request.session['csv_data'] = data.to_json(orient='split')
                    request.session['data_columns'] = list(data.columns)
            
            else:
                print("CSV being used from the exisiting session")