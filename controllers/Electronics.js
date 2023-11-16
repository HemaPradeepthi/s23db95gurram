var electronic = require('../models/Electronics');
// List of all Electronicss
exports.Electronics_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Electronics list');
};
// for a specific Electronics.
exports.Electronics_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Electronics detail: ' + req.params.id);
};
// Handle Electronics create on POST.
exports.Electronics_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Electronics create POST');
};
// Handle Electronics delete form on DELETE.
// exports.Electronics_delete = function (req, res) {
//     res.send('NOT IMPLEMENTED: Electronics delete DELETE ' + req.params.id);
// };
// Handle Electronics update form on PUT.
exports.Electronics_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Electronics update PUT' + req.params.id);
};

// List of all Electronicss
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

// Handle Electronics create on POST.
exports.Electronics_create_post = async function (req, res) {
    console.log(req.body)
    let document = new electronic();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Electronics_type":"goat", "cost":12, "size":"large"}
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

// for a specific Electronics.
exports.Electronics_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await electronic.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Electronics update form on PUT.
exports.Electronics_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await electronic.findById(req.params.id)
        // Do updates of properties
        if (req.body.Gadget) toUpdate.Gadget = req.body.Gadget;
        if (req.body.Price) toUpdate.Price = req.body.Price;
        if (req.body.Storage) toUpdate.Storage = req.body.Storage;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle Electronics delete on DELETE.
exports.Electronics_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await electronic.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.Electronics_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await electronic.findById(req.query.id)
        res.render('electronicdetail',
            { title: 'electronic Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Electronics_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('electronicscreate', { title: 'electronics Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a costume.
// query provides the id
exports.Electronics_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await electronic.findById(req.query.id)
res.render('electronicsupdate', { title: 'electronics Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle a delete one view with id from query
exports.electronics_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Costume.findById(req.query.id)
    res.render('electronicsdelete', { title: 'electronics Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    
    
