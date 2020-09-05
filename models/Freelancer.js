var mongoose = require("mongoose");
var schema = new mongoose.Schema({
    lancer_name : String,
    lancer_service : String,
    lancer_address : String,
    lancer_city : String
});

module.exports = mongoose.model('Freelancer', schema);