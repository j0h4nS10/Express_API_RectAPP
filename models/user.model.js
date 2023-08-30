const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const uniqueValidator = require('mongoose-unique-validator');

const userScheme = new mongoose.Schema({
    name: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email inválido'],
        unique: true
    }, 
    password: {
      type: String,
      required: true
    },
    salt: String,
});

userScheme.plugin(uniqueValidator, { message: 'email already exists' });

userScheme.methods.encrypt = function (password, salt) {
  return crypto
    .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
    .toString('hex');
};

userScheme.methods.hashPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.password = this.encrypt(password, this.salt);
};

userScheme.methods.verifyPassword = function (password) {
  return this.password === this.encrypt(password, this.salt);
};

userScheme.methods.generateJWT = function () {
  return jwt.sign({ idUser: this._id, rol: this.rol }, process.env.JWT_SECRET, {
    expiresIn: 30 * 24 * 60 * 60 * 1000,
  });
};


mongoose.model('Users', userScheme,'users');


