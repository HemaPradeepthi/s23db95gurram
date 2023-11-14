var express = require('express');
const Electronics_controlers= require('../controllers/Electronics');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Electronics', { title: 'Search Results Electronics' });
// });

/* GET costumes */
router.get('/', Electronics_controlers.Electronics_view_all_Page );

module.exports = router;
