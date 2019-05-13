const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const title = 'お申し込み完了';
  res.render('complete', {
    title: title
  });
});

module.exports = router;
