const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers"); //Next step!

const typeDefs = `
type User {
    id: ID
    email: String
    name: String
    shareditems: [Item]
}
    type Item {
        id: ID
        title: String
        description: String
        imageurl: String
        tags: [String]
        itemowner: User
        created: String
        available: Boolean
        borrower: User!
    }

    type Query {
        items: [Item]
        item(id: ID): Item
        users: [User]
        user(id: ID): User
    }
`;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
