const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Affiliate schema
const AffiliateSchema = new Schema({
  email: String,
  password: String,
  affiliateId: String
});

// Affiliate model
const AffiliateModel = mongoose.model('Affiliate', AffiliateSchema);

// Affiliate constructor
const Affiliate = (affiliateData) => {
  return AffiliateModel.create(affiliateData, (err, instance) => {
    return err ? err : instance;
  });
}

module.exports = Affiliate;