const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers"); //Next step!

const typeDefs = `

    type Tag {
        id: ID
        title: String
    }

    type User {
        id: ID
        email: String
        fullname: String
        shareditems: [Item]
    }
    // Any mutations we want to permit on our data must be added to
    // the schema as the Mutation root query type:
    type Mutation {

    }
    type Item {
        id: ID
        title: String
        description: String
        imageurl: String
        tags: [Tag]
        itemowner: User
        created: String
        available: Boolean
        borrower: User
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
