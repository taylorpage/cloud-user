const bcrypt = require('bcrypt');
const saltRounds = 8;

// Encrypt a password for storage
const encryptPassword = (password) => {

  // Create password hash using salt
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

	return hash;
};

// Checks password with stored hash
const validatePassword = (password, hash) => {

	// Compare given password with stored hash
	return bcrypt.compareSync(password, hash);
};

module.exports = {
	encryptPassword,
	validatePassword
};