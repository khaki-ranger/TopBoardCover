const express = require('express');
const router = express.Router();
const Item = require('../models/item');

/* GET home page. */
router.get('/', function(req, res, next) {
  const title = 'サービスのタイトル';
  Item.findAll({
    order: [['"createdAt"', 'ASC']]
  }).then((items) => {
    res.render('index', {
      title: title,
      items: items
    });
  });
});

module.exports = router;
