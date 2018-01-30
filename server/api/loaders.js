const DataLoader = require("dataloader");
const app = require("./resources/jsonResource");

// A batch loading function accepts an Array of keys, and returns a Promise which resolves to an Array of values. There are a few constraints that must be upheld:

// The Array of values must be the same length as the Array of keys.
// Each index in the Array of values must correspond to the same index in the Array of keys.

module.exports = ({
  jsonResource: {
    getSingleItem,
    getItems,
    getSingleUser,
    getUsers,
    getBorrowedItems
  }
}) => {
  return {
    userOwnedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => getItems(id)))
    ),
    // other data loaders go here...
    multipleUsers: new DataLoader(ids =>
      Promise.all(ids.map(id => getUsers(id)))
    ),
    userBorrowed: new DataLoader(ids =>
      Promise.all(ids.map(id => getBorrowedItems(id)))
    ),
    singleItem: new DataLoader(ids =>
      Promise.all(ids.map(id => getSingleItem(id)))
    ),
    singleUser: new DataLoader(ids =>
      Promise.all(ids.map(id => getSingleUser(id)))
    )
  };
};
