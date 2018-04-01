const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema
const UserSchema = new Schema({
  email: String,
  password: String,
  affiliate: String
});

// User model
const UserModel = mongoose.model('User', UserSchema);

// User constructor
const User = (userData) => {
  return UserModel.create(userData, (err, instance) => {
    return err ? err : instance;
  });
}

module.exports = User;
