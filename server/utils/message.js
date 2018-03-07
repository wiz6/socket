let generateMessage = (from, text) => {
	return {
		from,
		text,
		createdAt: new Date().getTime()
	}
};

let generateLocationMessage = (from, latitude, longitude) => {
	return {
		from,
		url: `https://www.google.ee/maps?q=${latitude},${longitude}`,
		createdAt: new Date().getTime()
	}
};

https://www.google.ee/maps?q=1,2
module.exports = {
	generateMessage,
	generateLocationMessage
};