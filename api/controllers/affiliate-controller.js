const Affiliate = require('../models/affiliate');

// Create a new affiliate
const createAffiliate = (affiliateData) => {
  return AffiliateModel.create(affiliateData, (err, instance) => {
    return err ? err : instance;
  });
}

module.exports = {
  createAffiliate
};