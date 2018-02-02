module.exports = `
    type Tag {
        id: ID
        title: String
    }
    type User {
        id: ID
        email: String
        fullname: String
        bio: String
        shareditems: [Item]
    }
    input TagInput {
        id: ID
    }
    input UpdateItem {
        imageurl: String
        title: String
        description: String
        tags: [TagInput]
    }
    input AddItemInput {
        itemowner: ID
        imageurl: String
        title: String
        description: String
        tags: [TagInput]
    }
    type Mutation {
        createNewItem(newItem: AddItemInput): Item
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
