const DataLoader = require('dataloader');
const {
getUserOwnedItems,
getItems,
getUsers,
getSingleItem,
getBorrowedItems
} = require('./jsonServer');

// A batch loading function accepts an Array of keys, and returns a Promise which resolves to an Array of values. There are a few constraints that must be upheld:

// The Array of values must be the same length as the Array of keys.
// Each index in the Array of values must correspond to the same index in the Array of keys.

const createLoaders = () => {
  return {
    userOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getUserOwnedItems(id))
      ))),
    // other data loaders go here...
    userBorrowed: new DataLoader(ids => (
        Promise.all(ids.map(id => getBorrowedItems(id)))
    )),
    singleItem: new DataLoader(ids => (
        Promise.all(ids.map(id => getSingleItem(id)))
    )),
    singleUser: new DataLoader(ids => (
        Promise.all(ids.map(id => getSingleUser(id)))
    )),
  }
};

// const findBy = (field, ...values) => {
//   console.log(`finding people with ${field} === ${values.join(', ')}`);
//   return Promise.resolve(
//     people.filter(person => values.includes(person[field]))
//   );
// };