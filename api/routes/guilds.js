var express = require("express");
var router = express.Router();
var Guild = require("../models/Guild.js");

router.get("/", function (req, res) {
    Guild.find()
        .then(function (guilds) {
            res.json(guilds);
        })
        .catch(function (err) {
            res.send(err);
        });
});

router.get("/:id", async function (req, res) {
    try {
        const guild = await Guild.findOne(
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
    const guilds = new Guild(req.body);
    try {
        await guilds.save();
        res.status(201).send({ guilds });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post("/:id", async function (req, res) {
    const newValue = req.body;
    console.log(newValue);
    try {
        await Guild.findOneAndUpdate({ GuildID: req.params.id }, newValue);
        
        res.status(200).send({newValue});
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
