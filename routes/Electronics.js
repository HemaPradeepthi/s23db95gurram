var express = require('express');
const Electronics_controlers= require('../controllers/Electronics');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Electronics', { title: 'Search Results Electronics' });
// });

/* GET Electronicss */
router.get('/', Electronics_controlers.Electronics_view_all_Page );
/* GET detail Electronics page */

/* GET detail costume page */
router.get('/detail', Electronics_controlers.Electronics_view_one_Page);
module.exports = router;
/* GET create costume page */
router.get('/create', Electronics_controlers.Electronics_create_Page);
/* GET create update page */
router.get('/update', Electronics_controlers.Electronics_update_Page);
/* GET delete costume page */
router.get('/delete', Electronics_controlers.electronics_delete_Page);