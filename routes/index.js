var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/demo', function(req, res, next) {
  res.render('demo');
});
router.get('/io', function(req, res, next) {
  res.render('socket');
});

module.exports = router;
