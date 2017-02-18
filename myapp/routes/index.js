var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/uiRouterIndex', function(req, res, next) {
  res.render('templates/uiRouter/index', { title: 'Express' });
});

router.get('/directiveIndex', function(req, res, next) {
  res.render('templates/directive/index', { title: 'Express' });
});


module.exports = router;
