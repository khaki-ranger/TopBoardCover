const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
  const title = 'お申し込み内容確認';
  const dataObject = {
    itemId: req.body.itemid,
    username: req.body.username,
    email: req.body.email,
    itemname: req.body.itemname,
    imgPath: req.body.image,
  };
  res.render('confirm', {
    title: title,
    dataObject: dataObject
  });
});

module.exports = router;
