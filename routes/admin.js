const express = require('express');
const router = express.Router();
const auth = require('../auth');

router.get('/', auth, (req, res, next) => {
  res.render('admin/index', { title: 'Express' });
});

module.exports = router;
