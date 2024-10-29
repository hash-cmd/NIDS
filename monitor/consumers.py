import json
from channels.generic.websocket import AsyncWebsocketConsumer

class DashboardConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.url = self.scope['url_route']['kwargs']['live_url']
        await self.accept()
        await self.send(text_data=json.dumps({
            'message': f'Connected to monitor: {self.url}'
        }))

    async def disconnect(self, close_code):
        print(f'Disconnected from monitor: {self.url}')

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        await self.send(text_data=json.dumps({
            'message': f'Received: {message} from monitor: {self.url}'
        }))
