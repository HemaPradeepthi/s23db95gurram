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

// VIEWS
// Handle a show all view
exports.Electronics_view_all_Page = async function (req, res) {
    try {
        theElectronics = await electronic.find();
        res.render('Electronics', { title: 'Electronics Search Results', results: theElectronics });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume create on POST.
exports.Electronics_create_post = async function (req, res) {
    console.log(req.body)
    let document = new electronic();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Gadget = req.body.Gadget;
    document.Price = req.body.Price;
    document.Storage = req.body.Storage;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
