const express = require('express');
const router = express.Router();

const { createAffiliate } = require('../controllers/affiliate-controller');
const AffiliateSerializer = require('../serializers/affiliate-serializer.js');

/* GET affiliates listing. */
router.get('/', (req, res, next) => {
  res.send({ affiliates: [{name: 'Company A'}] });
});

router.post('/', (req, res, next) => {

  // Create affiliate and save it
  const promise = createAffiliate(req.body)
    .then(affiliate => {
      res.send({
        affiliate: AffiliateSerializer(affiliate)
      });
    })
    .catch(err => {
      res.status(400);
      return res.send(err);
    });
});

module.exports = router;
