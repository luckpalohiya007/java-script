'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  first_name : {
      type: String,
      unique: false,
      required: true
  },
  last_name : {
      type: String,
      required: true
  },
  password : {
      type: String,
      required: true
  },
  email: {
      type: String,
      unique: true,
      required: true
  },
  isVerified: {
      type: Boolean,
      default: false
  }
});

module.exports = mongoose.model('User', userSchema);
