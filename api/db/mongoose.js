const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://discord:HyxadyprQGWO9G9F@cluster0.chceg.mongodb.net/NecroDatabase",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
    }
);
