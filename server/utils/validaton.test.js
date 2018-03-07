const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		let str = 2;
		expect(isRealString(str)).toBe(false);
	});

	it('should reject non-string values', () => {
		let str = '    ';
		expect(isRealString(str)).toBe(false);
	});

	it('should allow stirng with non-space characters', () => {
		let str = ' da da   ';
		expect(isRealString(str)).toBe(true);
	});
});