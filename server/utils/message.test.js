let expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		let from = 'Mart';
		let text = 'Hello world';
		let message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message.from).toBe(from);
		expect(message.text).toBe(text);

	});
});