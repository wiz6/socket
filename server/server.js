const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connection');

	socket.on('newMessage', (message) => {
		console.log('Got new message: ', message);
		socket.emit('createMessage', {
			from: message.from,
			text: message.text
		});
	});

	socket.on('disconnect', () => {
		console.log('Client was disconnected');
	});
});

app.get('/', (req, res) => {
	res.send('index.html');
});

server.listen(port, () => {
	console.log(`Server is up in port ${port}`);
});
