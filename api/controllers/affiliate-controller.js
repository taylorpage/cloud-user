const Affiliate = require('../models/affiliate');
const { encryptPassword } = require('../utils/auth');

// Create a new affiliate
const createAffiliate = (affiliateData) => {

  // Encrypt the password
  affiliateData.password = encryptPassword(affiliateData.password);

  // Create the affiliate instance
  const affiliate = new Affiliate(affiliateData);

  // Save affiliate instance
  return affiliate.save();
}

module.exports = {
  createAffiliate
};
