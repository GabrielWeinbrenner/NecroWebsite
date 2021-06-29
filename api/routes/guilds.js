var express = require("express");
var router = express.Router();
var Guilds = require("../models/Guilds.js");

router.get("/", function (req, res) {
    Guilds.find()
        .then(function (guilds) {
            res.json(guilds);
        })
        .catch(function (err) {
            res.send(err);
        });
});

router.get("/:id", async function (req, res) {
    try {
        const guild = await Guilds.findOne(
            { guildID: req.params.id },
            async (err, data) => {
                if (!data) return;
                return data;
            }
        );
        res.send(guild);
    } catch (e) {
        res.status(500).send();
    }
});

router.post("/", async function (req, res) {
    const guilds = new Guilds(req.body);
    try {
        await guilds.save();
        res.status(201).send({ guilds });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post("/:id", async function (req, res) {
    const newValue = req.body;
    try {
        await Guilds.findOneAndUpdate({ guildID: req.params.id }, { newValue });

        res.status(200).send();
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
