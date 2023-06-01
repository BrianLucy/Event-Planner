const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql").graphqlHTTP;
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

const app = express();

//temporary..global const to use it in resolver function to store the data
const events = [];

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: buildSchema(`
        type Event {
          _id: ID!
          title: String!
          description: String!
          date: String!
        }

        input EventInput {
          title: String!
          description: String!
          date: String!
        }

        type RootQuery {
            events: [Event!]!
        }

        type RootMutation {
            createEvent(eventInput: EventInput): Event
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
      events: () => {
        return events;
      },
      createEvent: (args) => {
        const event = {
          _id: Math.random().toString(),
          title: args.eventInput.title,//args will hold all the arguments that we get in the input
          description: args.eventInput.description,
          date: args.eventInput.date,
        };
        events.push(event);//push it to the global varibale
        return event;
      },
    },
    graphiql: true,
  })
);
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@devapi.b0zoipm.mongodb.net/${process.env.MONGO_DB}`
  )
  .then(() => app.listen(3002, () => console.log("server is running")))
  .catch((err) => console.log(err));
