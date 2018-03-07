const expect = require('expect');

const {Users} = require('./users');


describe('Users', () => {
	let users = [];
	let user1 = {id: 1, name: 'Mart', room: 'A'};
	let user2 = {id: 2, name: 'Mike', room: 'B'};
	let user3 = {id: 3, name: 'Alar', room: 'A'};

	beforeEach(() => {
		users = new Users();
		users.addUser(user1.id, user1.name, user1.room);
		users.addUser(user2.id, user2.name, user2.room);
		users.addUser(user3.id, user3.name, user3.room);
	});

	it('should add new user', () => {
		let users = new Users();
		let responseUser = users.addUser(user1.id, user1.name, user1.room);

		expect(users.users).toEqual([user1]);
	});

	it('should remove user', () => {
		let usersLength = users.users.length;
		let responseUser = users.removeUser(user1.id);

		expect(users.users.length).toEqual(usersLength-1);
		expect(responseUser).toEqual(user1);
	});

	it('should not remove user', () => {
		let userId = 99;
		let usersLength = users.length;
		let user = users.removeUser(userId);

		expect(user).toNotExist();
		expect(users.length).toEqual(usersLength);

	});

	it('should return user', () => {
		let user = users.getUser(user1.id);

		expect(user.id).toBe(user1.id);
	});

	it('should return names for A room', () => {
		let rooms = users.getUserList('A');

		expect(rooms).toEqual([user1.name, user3.name]);
	});

});