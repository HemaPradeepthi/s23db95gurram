var electronic = require('../models/Electronics');
// List of all Costumes
exports.Electronics_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Electronics list');
};
// for a specific Costume.
exports.Electronics_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Electronics detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Electronics_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Electronics create POST');
};
// Handle Costume delete form on DELETE.
exports.Electronics_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Electronics delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Electronics_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Electronics update PUT' + req.params.id);
};

// List of all Costumes
exports.Electronics_list = async function (req, res) {
    try {
        theElectronics = await electronic.find();
        res.send(theElectronics);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
