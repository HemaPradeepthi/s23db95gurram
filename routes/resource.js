var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Electronics_controller = require('../controllers/Electronics');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/electronics', Electronics_controller.Electronics_create_post);
// DELETE request to delete Costume.
router.delete('/electronics/:id', Electronics_controller.Electronics_delete);
// PUT request to update Costume.
router.put('/electronics/:id', Electronics_controller.Electronics_update_put);
// GET request for one Costume.
router.get('/electronics/:id', Electronics_controller.Electronics_detail);
// GET request for list of all Costume items.
router.get('/electronics', Electronics_controller.Electronics_list);
//GET detail costume page //
module.exports = router;