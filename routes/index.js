const express = require('express');
const router = express.Router();
const upload = require('./upload');
const Item = require('../models/item');

router.get('/', (req, res, next) => {
  const title = 'サービスのタイトル';
  Item.findAll({
    where: {
      original: false
    },
    order: [['"itemId"', 'ASC']]
  }).then((items) => {
    res.render('index', {
      title: title,
      items: items
    });
  });
});

router.post('/upload', (req, res, next) => {
  const singleUpload = upload.single('designimage');
  singleUpload(req, res, (error) => {
    if (error) {
      res.json({'error': error.message});
    } else {
      const imgPath = process.env.CDN_DOMAIN + req.file.key;
      const params = {
        imgPath: imgPath,
        notice: null,
        original: true
      };
      Item.create(params).then((i) => {
        const path = '/detail/' + i.itemId;
        res.redirect(path);
      });
    }
  });
});

module.exports = router;
