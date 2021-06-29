var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");
var guildsRoutes = require("./routes/guilds.js");
var cors = require("cors");
app.use(cors());
require("./db/mongoose");

// Access body request of posts
app.use(express.json());

// Access body request of posts
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.send("loaded");
});
app.use("/guilds", guildsRoutes);

app.listen(3000, function () {
    console.log("App run");
});
