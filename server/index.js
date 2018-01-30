const { makeExecutableSchema } = require("graphql-tools");

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const createLoaders = require('./api/loaders');

const typeDefs = require('./api/schema')
const initResolvers = require("./api/resolvers")

const config = require("./config")

const app = express();

const gqlSchema = makeExecutableSchema({
  typeDefs,
  resolvers: initResolvers(app)
})

config(app);

// Cross-Origin Resource Sharing, this applies extra middleware to our
// express server
app.use("*", cors());

// Where we will send all of our GraphQL requests
app.use("/graphql", bodyParser.json(), graphqlExpress({ gqlSchema }));

// A route for accessing the GraphiQL tool
app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql",
    gqlSchema,
    context: { loaders: createLoaders }
  })
);
app.listen(app.get('GQL_PORT'), () =>
  console.log(`GraphQL is now running on http://localhost:${app.get('GQL_PORT')}/graphql`)
);
