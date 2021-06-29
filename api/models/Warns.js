const { Schema, model } = require("mongoose");

module.exports = model(
    "Warns",
    new Schema({
        Channel: String,
        Count: Number,
        UserID: Number,
    })
);
