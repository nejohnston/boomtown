const loaders = require("./loaders");

// In place of an actual database
module.exports = app => {
  const resolveFunctions = {
    Query: {
      items: (root, args, context) => {
        // Geth me the Items!
        return context.loaders.getItems.load(args);
      },
      users: (root, args, context) => {
        return context.loaders.getUsers.load(args);
      },
      item(root, { id }, context) {
        return context.loaders.singleItem.load(id);
      },
      user(root, { id }, context) {
        // Get me a User!
        return context.loaders.singleUser.load(id);
      }
    },
    //TODO: Save this new item in the db
    // TODO: Must return Item thanks to our mutation scheme
    // Whatever you return in your resolver is what you'll get
    // null means that the variable is pointing to no object
    Mutation: {
      addItem(root, { newItem: { title } }) {
        return { title };
      }
    },
    // For every item
    Item: {
      itemowner(item) {
        //fetch(`${USERS_URL}/${item.itemowner}`).then(r => r.json())
        return getUser(item.itemowner);
      },
      borrower(item) {
        if (item.borrower) {
          return getUser(item.borrower);
        } else {
          return null;
        }
      },
      async tags(item) {
        const it = await getItem(item.id);
        return it.tags;
      },
      User: {
        shareditems(user) {
          return getSharedItems(user.id);
        }
      }
    }
  };
};
