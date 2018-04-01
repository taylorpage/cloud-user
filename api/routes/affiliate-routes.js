const express = require('express');
const router = express.Router();

const { createAffiliate } = require('../controllers/affiliate-controller');

/* GET affiliates listing. */
router.get('/', (req, res, next) => {
  res.json({ affiliates: [{name: 'Company A'}] });
});

router.post('/', (req, res, next) => {

  // Create affiliate and save it
  const promise = createAffiliate(req.body)
    .then(affiliate => res.json({ affiliate: affiliate }));

});

module.exports = router;
