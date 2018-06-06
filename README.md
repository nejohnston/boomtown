# Boomtown 
My first RED Academy App Development project.

## About The Project

Boomtown is an app for sharing and borrowing things.

## Technologies

* JavaScript / JSON
* Node
* Express
* React
* Material UI
* Redux
* Apollo / GraphQL
* PostgreSQL

## Installation

After downloading the repository, go to the root of the file and run:

```
cd client && npm install
```
Then:
```
cd ../server && npm install
```

## Start-up

1: Serve the database of items by starting PostgreSQL

2: In `server/graphql` start the GraphQL server:

```
cd server
npm install
npm start
```

3: In the `client` directory, start the client:

```
cd client
npm start
```

4: If needed, access the GraphiQL UI at:

```
http://localhost:3002/graphiql
```

## Todo

1: Create SQL script for README so items can be added locally to the pg database.

2: Upload to Heroku so pg database is not just local.

3: Finish GraphQL mutation for the adding item feature.

4: Finish borrowing feature.

Happy Happy Coding :)
