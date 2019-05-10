const express = require('express');
const router = express.Router();
const Item = require('../models/item');

/* GET home page. */
router.get('/:itemId', function(req, res, next) {
  const title = '詳細';
  const itemId = req.params.itemId;
  Item.findOne({
    where: {
      itemId: itemId
    }
  }).then((item) => {
    res.render('detail', {
      title: title,
      item: item
    });
  });
});

module.exports = router;
