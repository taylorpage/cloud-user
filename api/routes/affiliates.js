var express = require('express');
var router = express.Router();

/* GET affiliates listing. */
router.get('/', (req, res, next) => {
  res.json({affiliates: [{name: 'Company A'}]});
});

module.exports = router;