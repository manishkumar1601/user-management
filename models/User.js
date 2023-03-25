const mongoose = require('mongoose');

const SCHEMA = mongoose.Schema;

const userSchema = new SCHEMA({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 4
    }
});

module.exports = mongoose.model("User", userSchema);