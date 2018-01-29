import DataLoader from 'dataloader';
import { getUserOwnedItems } from './jsonServer';

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getUserOwnedItems(id))
      ))),
    // other data loaders go here...
    userBorrowed: new DataLoader(ids => (
        Promise.all(ids.filter())
    )),
    singleItem: new DataLoader(ids => (
    )),
    singleUser: new DataLoader(ids => (

    ))
  }
};

// const findBy = (field, ...values) => {
//   console.log(`finding people with ${field} === ${values.join(', ')}`);
//   return Promise.resolve(
//     people.filter(person => values.includes(person[field]))
//   );
// };