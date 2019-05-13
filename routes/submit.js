const express = require('express');
const router = express.Router();
const uuidV1 = require('uuid/v1');
const User = require('../models/user');

router.post('/', function(req, res, next) {
  const params = {
    userId: uuidV1(),
    username: req.body.username,
    email: req.body.email,
    itemId: req.body.itemid
  };
  if (!params.itemId || !params.username || !params.email) {
    res.redirect('/');
  } else {
    User.create(params).then(() => {
      res.redirect('/');
    });
  }
});

module.exports = router;
