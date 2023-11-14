const mongoose = require("mongoose")
const CoustmeSchema = mongoose.Schema({
    Gadget: String,
    Price: Number,
    Storage: Number
})
module.exports = mongoose.model("Electronics", CoustmeSchema)