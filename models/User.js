// adding User.js model first since it is the parent model //
// make sure going back to app.js to add mongoose and connect to mongodb //

const mongoose = require("mongoose"); // import mongoose package
const Schema = mongoose.Schema; // creating the schema

const UserSchema = new Schema({ // all string and required to enter username, email, and password //
    email: {
        type : String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdEvents: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Event' // this is important for mongoose to know that this is a relationship between the two models // // use ref Event models //
        }
    ]
    
});

module.exports = mongoose.model('User', UserSchema);
