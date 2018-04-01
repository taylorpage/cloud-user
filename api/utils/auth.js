const bcrypt = require('bcrypt');
const saltRounds = 8;

// Encrypt a password for storage
const encryptPassword = (password) => {
	let encryptedPassword;

	// Create password hash using salt
	bcrypt.hash(password, saltRounds)
		.then(hash => encryptedPassword = hash)
		.catch(err => console.log(err));

	return encryptedPassword;
};

// Checks password with stored hash
const validatePassword = (password, hash) => {
	let valid = false;

	// Compare given password with stored hash
	bcrypt.compare(password, hash)
		.then(res => valid = res)
		.catch(err => console.log(err));

	return valid;
}