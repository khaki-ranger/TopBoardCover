const express = require('express');
const router = express.Router();
const auth = require('../auth');
const Item = require('../models/item');

router.get('/', auth, (req, res, next) => {
  const title = '管理者メニュー';
  res.render('admin/index', {
     title: title
  });
});

router.get('/item/add', auth, (req, res, next) => {
  const title = '新規アイテム登録';
  res.render('admin/itemadd', {
     title: title
  });
});

router.post('/item/add', auth, (req, res, next) => {
  const params = {
    imgPath: req.body.imgPath,
    notice: req.body.notice,
    original: false
  };
  if (!params.imgPath) {
    console.log('画像パスが未入力です');
    res.redirect('/admin');
  } else {
    Item.create(params).then(() => {
      res.redirect('/admin');
    });
  }
});

module.exports = router;
