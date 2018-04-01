const mongoose = require('mongoose');
const uuid = require('node-uuid');
const Schema = mongoose.Schema;

// Affiliate schema
const AffiliateSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  uuid: {
    type: String,
    default: uuid.v1
  }
});

// Affiliate model
const Affiliate = mongoose.model('Affiliate', AffiliateSchema);

module.exports = Affiliate;