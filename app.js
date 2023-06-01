const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql").graphqlHTTP;
const { buildSchema } = require("graphql");

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
app.listen(3002);
