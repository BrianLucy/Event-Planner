// adding User.js model first since it is the parent model //
// make sure going back to app.js to add mongoose and connect to mongodb //

const mongoose = require("mongoose"); // import mongoose package
const Schema = mongoose.Schema; // creating the schema

const UserSchema = new Schema({ // all string and required to enter username, email, and password //
    username : {
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', UserSchema);
