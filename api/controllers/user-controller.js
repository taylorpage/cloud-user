const User = require('../models/user');

// Create a new user
const createUser = (userData) => {
  return User.create(userData, (err, instance) => {
    return err ? err : instance;
  });
}

module.exports = {
  createUser
};