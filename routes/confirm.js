const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
  const title = 'お申し込み内容確認';
  const dataObject = {
    itemId: req.body.itemid,
    imgPath: req.body.image,
    username: req.body.username,
    email: req.body.email,
    sex: req.body.sex,
    year: req.body.year,
    college: req.body.college,
    department: req.body.department,
    club: req.body.club
  };
  res.render('confirm', {
    title: title,
    dataObject: dataObject
  });
});

module.exports = router;
