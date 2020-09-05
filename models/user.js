var mongoose = require("mongoose");
var Schema = new mongoose.Schema({
    name : String,
    likes : Number,
    comment : [{
        type: String
    }]
});



module.exports = mongoose.model("User", Schema);