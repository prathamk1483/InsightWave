from django.contrib import admin
from django.urls import path,include
from .import views

urlpatterns = [
    path('getnullvalues/',views.nullvalues,name="nullvalues") ,
    path('getnullvaluesbypercentage/',views.nullvaluesbypercentage,name="nullvaluesbypercentage") ,
    path('getdescription/',views.datadescription,name="description") ,
    path('dropcolumn/',views.dropcol,name="dropcolumn") ,
    path('fillmissingvalues/', views.fillmissingvalues, name='fillmissingvalues'),
    path('onehotencode/', views.onehotencode, name='onehotencode'),
    path('scalefeatures/', views.scale_features, name='scale_features'),
]
