var fetch = require("node-fetch")

module.exports = () => {
const USERS_URL = "http://localhost:4000/users";
const ITEMS_URL = "http://localhost:4000/items";

const getItems = fetch(ITEMS_URL).then(r => r.json());
const getUsers = fetch(USERS_URL).then(r => r.json());
const getSingleItem = fetch(`${ITEMS_URL}/${id}`).then(r => r.json());
const getSingleUser = fetch(`${USERS_URL}/${id}`).then(r => r.json());
const getBorrowedItems = fetch(`${USERS_URL}/${item.borrower}`).then(r => r.json());
}