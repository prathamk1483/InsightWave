from django.contrib import admin
from django.urls import path,include
from .import views

urlpatterns = [
    path('',views.index,name='home'),
    path('gethistogram/',views.histogram,name="histogram") ,
    path('heatmap/', views.correlation_heatmap, name='correlation_heatmap'),
    path('pairplot/', views.pairplot, name='pairplot'),
    path('boxplot/', views.boxplot, name='boxplot'),
    path('scatterplot/', views.scatterplot, name='scatterplot'),
]
