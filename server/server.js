const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connection');

	socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

	socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

	socket.on('createMessage', (message, callback) => {
		console.log('Got new message: ', message);

		io.emit('newMessage', generateMessage(message.from, message.text))
		callback('This is from the server');
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
