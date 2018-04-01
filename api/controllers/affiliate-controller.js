const Affiliate = require('../models/affiliate');

// Create a new affiliate
const createAffiliate = (affiliateData) => {

  // Create the affiliate instance
  const affiliate = new Affiliate(affiliateData);

  // Save affiliate instance
  return affiliate.save();
}

module.exports = {
  createAffiliate
};
