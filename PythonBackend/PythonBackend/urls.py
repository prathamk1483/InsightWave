from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('preprocess/',include('Preprocess.urls')) ,
    path('visualize/',include('Visualize.urls')) ,
    path('report/',include('Report.urls')) ,
]
