const express = require('express');
const router = express.Router();
const Item = require('../models/item');

/* GET home page. */
router.get('/:itemId', function(req, res, next) {
  const title = '詳細';
  const itemId = req.params.itemId;
  const colleges = [
    {id:  1, name: '経済学部'},
    {id:  2, name: '文学部'},
    {id:  3, name: '理工学部'}
  ];
  const departments = [
    {id:  1, name: '経済学科'},
    {id:  2, name: '英文学科'},
    {id:  3, name: '情報工学科'}
  ];
  Item.findOne({
    where: {
      itemId: itemId
    }
  }).then((item) => {
    res.render('detail', {
      title: title,
      colleges: colleges,
      departments: departments,
      item: item
    });
  });
});

module.exports = router;
