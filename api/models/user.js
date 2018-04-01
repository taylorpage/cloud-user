const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema
const UserSchema = new Schema({
  email: String,
  password: String,
  affiliateUUID: String
});

// User model
const User = mongoose.model('User', UserSchema);

module.exports = User;
