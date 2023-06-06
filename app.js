const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require("express-graphql").graphqlHTTP;

const mongoose = require('mongoose');

const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");

const app = express();
const port = process.env.PORT || 3002;


app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);


mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@devapi.b0zoipm.mongodb.net/${process.env.MONGO_DB}`
  )
  .then(() => app.listen(port, () => console.log("server is running")))
  .catch((err) => console.log(err));