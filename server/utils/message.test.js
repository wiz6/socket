let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		let from = 'Mart';
		let text = 'Hello world';
		let message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message.from).toBe(from);
		expect(message.text).toBe(text);

	});

	it('should generate correct location object', () => {
		let from = 'Mart';
		let lat = 10;
		let long = 12;
		let url = `https://www.google.ee/maps?q=${lat},${long}`;
		let message = generateLocationMessage(from, lat, long);

		expect(message.createdAt).toBeA('number');
		expect(message.from).toBe(from);
		expect(message.url).toBe(url);
	});
});
