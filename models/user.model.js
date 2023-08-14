const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String
})

mongoose.model('Users', userScheme,'users');
