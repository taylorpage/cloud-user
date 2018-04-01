const express = require('express');
const router = express.Router();

const { createAffiliate } = require('../controllers/affiliate-controller');

/* GET affiliates listing. */
router.get('/', (req, res, next) => {
  res.json({ affiliates: [{name: 'Company A'}] });
});

router.post('/', (req, res, next) => {
  res.json({ affiliate: createAffiliate(req.affiliate) });
});


module.exports = router;