const express = require('express');
const router = express.Router();
const uuidV1 = require('uuid/v1');
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
    itemId: uuidV1(),
    itemname: req.body.itemname,
    imgPath: req.body.imgPath
  };
  if (!params.itemname || !params.imgPath) {
    console.log('アイテム名か画像パスが未入力です');
    res.redirect('/admin');
  } else {
    Item.create(params).then(() => {
      res.redirect('/admin');
    });
  }
});

module.exports = router;
