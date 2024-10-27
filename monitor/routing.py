from django.urls import re_path
from . import consumers

websocket_urlpatterns =[ 
    re_path(r'ws/live/(?P<live_url>\w+)/$', consumers.DashboardConsumer.as_asgi()),
    ]