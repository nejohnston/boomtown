# Boomtown Starter

## Installation

Download the repo, then run:

```bash
cd client && npm install
```

## Start-up

From inside the `client` directory, run:

```bash
npm run dev
```

to open json-server
json-server --watch db.json -p 4000

npm install apollo-client-preset react-apollo graphql-tag graphql --save
ApolloProvider

query getItem($itemid:ID){
item(id:$itemid) {
title
available
}
}

query getUser($userid:ID) {
user(id:$userid)
{
fullname
}
}
query getUsers {
users {
fullname
}
}
query getItems{
items{
title
}
}
{
"userid": "LAi9TYWxgGhbjgHu1Sm6ZvB1tRP2",
"itemid": "3"
}

const mapStateToProps = state => ({
isLoading: state.profile.isLoading,
itemsData: state.profile.itemsData,
error: state.profile.error
});
Happy coding :)
