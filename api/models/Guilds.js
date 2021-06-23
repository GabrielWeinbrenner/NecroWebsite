var mongoose = require("mongoose");

var Guilds = new mongoose.Schema({
    guildID: {
        type: String,
    },
    guildName: {
        type: String,
    },
    antiAltDate: String /* Date Of Account */,
    antiAltChannel: String /* Channel for logs */,
    antiInvite: Boolean,
    antiRaid: Boolean,
    autoRole: String /* Role id */,
    blacklistWords: Array /* Words  */,
    chatbotChannel: String /* Channel id  */,
    count: {
        id: mongoose.Schema.Types.ObjectId,
        ref: "Count",
    } /* Count */,
    customVoice: String /* Custom voice Channel */,
    prefix: String,
    memberCount: String,
    memberCountChannel: String /* Creates a Channel To Display Member */,
    modLogs: String /* Modlogs channel */,
    ranks: String /* WIP */,
    reactionRoles: String /* WIP */,
    starboard: String /* Starboard channel id */,
    warn: Array /* Stored Warnings */,
    welcomeChannel: String /* Welcome Channel ID */,
});

var Guilds = mongoose.model("Guilds", guilds);

module.exports = Guilds;
