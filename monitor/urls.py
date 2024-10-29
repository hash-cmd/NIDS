from django.urls import path
from monitor.views import (
    dashboard
)

urlpatterns = [
    path('dashboard/', dashboard, name="monitoring live activities"),
]
