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
    input User {
        id: ID
        email: String
        fullname: String
        shareditems: [Item]
    }
    input TagInput {
        id: ID
        title: String
    }
    input UpdateItem {
        imageurl: String
        title: String
        description: String
        tags: [TagInput]
    }
    input AddItemInput {
        imageurl: String
        title: String
        description: String
        tags: [TagInput]
    }
    type Mutation {
        addItem(newItem: AddItemInput): Item
        // getUser(newUser: )
        updateItem(graphItem: UpdateItem): Item
        }

    #/ Any mutations we want to permit on our data must be added to
    #/ the schema as the Mutation root query type:
    #/ Whenever there is an object passing through the mutation
    #/ there needs to be an input added

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
    #/ Like a get request. item(id: ID) are like post requests because
    #/ a new item might be being posted
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
