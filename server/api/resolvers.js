const fetch = require("node-fetch");
const loaders = require("./loaders")

// In place of an actual database


const resolveFunctions = {
  Query: {
    items: (root, args, context) => {
      // Geth me the Items!
      return context.loaders.UserOwnedItems.load(user.id);
    },
    users: (root, args, context) => {
      return context.loaders.getItems.load(args)
    },
    item(root, { id }, context) {
      return fetch(`${ITEMS_URL}/${id}`).then(r => r.json());
    },
    user(root, { id }, context) {
      // Get me a User!
      return fetch(`${USERS_URL}/${id}`).then(r => r.json());
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
      return fetch(`${USERS_URL}/${item.itemowner}`).then(r => r.json());
    },
    borrower(item) {
      if (item.borrower) {
        return fetch(`${USERS_URL}/${item.borrower}`).then(r => r.json());
      } else {
        return null;
      }
    },
    async tags(item) {
      const theItem = await fetch(`${ITEMS_URL}/${item.borrower}`).then(r =>
        r.json()
      );
      return theItem.tags;
    }
  },
  User: {
    async shareditems(user) {
      const users = await fetch(USERS_URL).then(r => r.json());
      return items.filter(item => item.ownerid === user.id);
    }
  }
  // User: {
  //   fullname(user) {
  //     return fetch(`${USERS_URL}/${item.itemowner}`).then(r => r.json());
  //   }
  // }
};

module.exports = resolveFunctions;
