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

/* GET detail Electronics page */
router.get('/detail', Electronics_controlers.Electronics_view_one_Page);
module.exports = router;
/* GET create Electronics page */
router.get('/create', Electronics_controlers.Electronics_create_Page);
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET update Electronics page */
router.get('/update', secured,
Electronics_controlers.Electronics_update_Page);
/* GET delete Electronics page */
router.get('/delete', Electronics_controlers.electronics_delete_Page);