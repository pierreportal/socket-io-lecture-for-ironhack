const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String,
    picture: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;