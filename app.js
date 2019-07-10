const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const Users = require("./generateSeedData");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type User {
      id: ID
      username: String,
      firstName: String,
      lastName: String,
      age: Int,
      avatar: String,
      friends: [Friends]
  }
  type Friends {
      username: String,
      avatar: String
  }
  type Query {
    users: [User]
    user(id: Int): User
  }
`);

// Root Resolver
const rootValue = {
	user: args => Users.find(user => user.id === args.id),
	users: () => Users
};

const app = express();
app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		rootValue,
		graphiql: true
	})
);

app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");
