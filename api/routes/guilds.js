var express = require('express');
var router = express.Router();
var db = require("../models/");

router.get('/', function (req, res) {
    db.Guilds.find()
        .then(function (guilds) {
            res.json(guilds);
        })
        .catch(function (err) {
            res.send(err);
        })
});



module.exports = router;
