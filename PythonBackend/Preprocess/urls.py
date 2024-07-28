from django.contrib import admin
from django.urls import path,include
from .import views

urlpatterns = [
    path('getnullvalues/',views.nullvalues,name="nullvalues") ,
    path('getnullvaluesbypercentage/',views.nullvaluesbypercentage,name="nullvaluesbypercentage") ,
    path('getdescription/',views.datadescription,name="description") ,
]
