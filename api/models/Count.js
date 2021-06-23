const { Schema, model  } = require("mongoose");

module.exports = model("count", new Schema({
    Channel: String, 
    Count: Number, 
    UserID: Number,
}))
