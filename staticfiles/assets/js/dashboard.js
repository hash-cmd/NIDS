const monitor = "some_monitor"; // Replace this with your actual monitor name
const socket = new WebSocket(`ws://${window.location.host}/ws/dashboard/${monitor}/`);

// Handle incoming messages
socket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    console.log("Message from server: ", data.message);
};

// Send a message
function sendMessage(message) {
    socket.send(JSON.stringify({
        'message': message
    }));
}

// Handle connection open
socket.onopen = function (event) {
    console.log("Connected to WebSocket!");
};

// Handle connection close
socket.onclose = function (event) {
    console.log("Disconnected from WebSocket.");
};
