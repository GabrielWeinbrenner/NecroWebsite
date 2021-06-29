const { Schema, model } = require("mongoose");

module.exports = model(
    "Count",
    new Schema({
        Channel: String,
        Count: Number,
        UserID: Number,
    })
);
