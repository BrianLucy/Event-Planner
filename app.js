const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql").graphqlHTTP;
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");
// adding bcryptjs //
const bcrypt = require("bcryptjs");

const Event = require("./models/event");
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());

// const events next, it get tricky here // -- Tien


const user = (userId) => {
  return User.findById(userId)
  ,then(user => {
    return { ...user._doc, _id: user.id };
  })
  .catch(err => {
    throw err;
  });
}



app.use(
  "/graphql",
  graphqlHttp({
    schema: buildSchema(`
        type Event {
          _id: ID!
          title: String!
          description: String!
          date: String!
          creator: User!

        }
        
        type User {
          _id: ID!
          email: String!
          password: String
          createdEvents: [Event!]

        }

        input EventInput {
          title: String!
          description: String!
          date: String!
        }

        input UserInput {
          email: String!
          password: String!
        }

        type RootQuery {
            events: [Event!]!
        }

        type RootMutation {
            createEvent(eventInput: EventInput): Event
            createUser(userInput: UserInput): User
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
      events: () => {
        return Event.find()
          .then((events) => {
            return events.map((event) => {
              return { ...event._doc,
                 _id: event.id,
                 creator : user.bind(this, event._doc.creator)
                };
            });
          })
          .catch((err) => {
            throw err;
          });
      },
      createEvent: (args) => {
        const event = new Event({
          title: args.eventInput.title,
          description: args.eventInput.description,
          date: new Date(args.eventInput.date),
          creator: ''
        });
        let createdEvent;
        
        return event
          .save()
          .then((result) => {
            createdEvent = { ...result._doc, _id: result._doc._id.toString() };
            return User.findById('')
            
          })
          .then(user => {
            if (user) {
              throw new Error('User already exists.')
            }
            user.createdEvents.push(event);
            return user.save();
          })
          .then(result => {
            return createdEvent;
          })
          .catch((err) => {
            console.log(err);
            throw err;
          });
      },
      createUser: (args) => {
        return User.findOne({ email: args.userInput.email }).then(user => {
          if (user) {
            throw new Error('User already exists.')
          }
          return bcrypt.hash(args.userInput.password, 12);
        })
          .then(hashedPassword => {
            const user = new User({
              email: args.userInput.email,
              password: hashedPassword
            });
            return user.save();
          })
          .then(result => {
            return { ...result._doc, password: null, _id: result.id };
          })
          .catch(err => {
            throw err;
          });

      }
    },
    graphiql: true, // graphiql to testing
  })
);
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@devapi.b0zoipm.mongodb.net/${process.env.MONGO_DB}`
  )
  .then(() => app.listen(port, () => console.log("server is running")))
  .catch((err) => console.log(err));
