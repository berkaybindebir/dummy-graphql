const faker = require("faker");

const Users = [];

(function createSeedData() {
	console.log("Creating Seed Data");
	for (let i = 0; i <= 10; i++) {
		Users.push({
			id: i,
			username: faker.internet.userName(),
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			age: faker.random.number({ min: 18, max: 60 }),
			avatar: faker.internet.avatar(),
			friends: (() => {
				let friendsList = [];

				for (let i = 0; i <= 5; i++) {
					friendsList.push({
						id: i,
						username: faker.internet.userName(),
						avatar: faker.internet.avatar()
					});
				}
				console.log("Seed data is created");
				return friendsList;
			})()
		});
	}
})();

module.exports = Users;
