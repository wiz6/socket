let socket = io();

socket.on('connect', function() {
	console.log('Connected to server');
});

socket.on('disconnect', function() {
	console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
	console.log('New message: ', message);
	let li = jQuery('<li></li>');
	li.text(`${message.from}: ${message.text}`);

	jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function(message) {
	console.log('New location message: ', message);
	let li = jQuery('<li></li>');
	li.html(`${message.from}: <a target="_blank" href="${message.url}">My location</a>`);

	jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e) {
	e.preventDefault();
	socket.emit('createMessage', {
		from: 'User',
		text: jQuery('#message').val()
	}, function(data) {
		console.log('Got it: ', data);
		jQuery('#message').val('');

	});
});

let $locationButton = jQuery('#send-location');

$locationButton.on('click', function() {
	if (!navigator.geolocation) {
		return alert('Gelocation not supported!');
	}

	navigator.geolocation.getCurrentPosition(function(position) {
		socket.emit('createLocationMessage', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		});
	}, function() {
		alert('Unable to get position!');
	});
});