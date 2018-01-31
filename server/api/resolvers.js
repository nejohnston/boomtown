const loaders = require("./loaders");

module.exports = ({ postgresResource: { getTags } }) => ({
  Query: {
    items: (root, args, context) => {
      return context.loaders.allItems.load(args);
    },
    users: (root, args, context) => {
      return context.loaders.multipleUsers.load(args);
    },
    item: (root, { id }, context) => {
      return context.loaders.singleItem.load(id);
    },
    user: (root, { id }, context) => {
      return context.loaders.singleUser.load(id);
    }
  },
  // Whatever you return in your resolver is what you'll get
  // null means that the variable is pointing to no object
  Mutation: {
    addItem(root, { newItem: { title } }) {
      return { title };
    }
  },
  // For every item
  Item: {
    // itemowner(item) {
    //   return getUser(item.itemowner);
    // },
    // borrower(item) {
    //   if (item.borrower) {
    //     return getUser(item.borrower);
    //   } else {
    //     return null;
    //   }
    // },
    async tags(item) {
      return await getTags(item.id);
    }
  }
  // User: {
  //   shareditems(user) {
  //     return getSharedItems(user.id);
  //   }
  // }
});
