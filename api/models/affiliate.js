const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Affiliate schema
const AffiliateSchema = new Schema({
  email: String,
  password: String
});

// Affiliate model
const Affiliate = mongoose.model('Affiliate', AffiliateSchema);

module.exports = Affiliate;