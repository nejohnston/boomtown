const DataLoader = require("dataloader");
// const app = require("./resources/postgresResource");

// A batch loading function accepts an Array of keys, and returns a Promise which resolves to an Array of values. There are a few constraints that must be upheld:

// The Array of values must be the same length as the Array of keys.
// Each index in the Array of values must correspond to the same index in the Array of keys.

module.exports = ({
  postgresResource: {
    getItems,
    getSingleItem,
    getTags,
    getSharedItems
  },
  firebaseResource: { getUsers, getSingleUser }
}) => {
  return {
    allItems: new DataLoader(ids =>
      Promise.all(ids.map(id => getItems(id)))
    ),
    singleItem: new DataLoader(ids =>
      Promise.all(ids.map(id => getSingleItem(id)))
    ),
    userSharedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => getSharedItems(id)))
    ),
    itemTags: new DataLoader(ids =>
      Promise.all(ids.map(id => getTags(id)))
    ),
    allUsers: new DataLoader(ids =>
      Promise.all(ids.map(id => getUsers(id)))
    ),
    singleUser: new DataLoader(ids =>
      Promise.all(ids.map(id => getSingleUser(id)))
    )
  };
};
