// Affiliate serializer
const AffiliateSerializer = (affiliate) => {
  const publicFields = [ 'email', 'uuid' ];
  const serializedAffiliate = {};

  publicFields.forEach(field => {
    serializedAffiliate[field] = affiliate[field];
  });

  return serializedAffiliate;
};

module.exports = AffiliateSerializer;