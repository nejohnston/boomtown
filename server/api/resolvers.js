const fetch = require("node-fetch");

// In place of an actual database

const USERS_URL = "http://localhost:4000/users";
const ITEMS_URL = "http://localhost:4000/items";

const resolveFunctions = {
  Query: {
    items() {
      // Geth me the Items!
      return fetch(ITEMS_URL).then(r => r.json());
    },
    users() {
      return fetch(USERS_URL).then(r => r.json());
    },
    item(root, { id }) {
      return fetch(`${ITEMS_URL}/${id}`).then(r => r.json());
    },
    user(root, { id }) {
      // Get me a User!
      return fetch(`${USERS_URL}/${id}`).then(r => r.json());
    }
  },
  //TODO: Save this new item in the db
  // TODO: Must return Item thanks to our mutation scheme
  // Whatever you return in your resolver is what you'll get
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
      const theItem = await fetch(`${USERS_URL}/${item.borrower}`).then(r =>
        r.json()
      );
      return theItem.tags;
    }
  },
  User: {
    async shareditems(user) {
      const items = await fetch(ITEMS_URL).then(r => r.json());
      return items.filter(item => item.ownerid === user.id);
    }
  }
};

module.exports = resolveFunctions;
