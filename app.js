const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require("express-graphql").graphqlHTTP;
const isAuth = require("./middleware/is-auth");

const mongoose = require('mongoose');

const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");

const app = express();
const port = process.env.PORT || 3005;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use('/static', express.static(path.join(__dirname, '../build/static')));
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	});
}

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