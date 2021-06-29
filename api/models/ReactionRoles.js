const { Schema, model } = require("mongoose");

module.exports = model(
    "ReactionRoles",
    new Schema({
        Message: String,
        Roles: Array,
    })
);
