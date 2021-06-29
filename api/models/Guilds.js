var mongoose = require("mongoose");

var guildsSchema = new mongoose.Schema({
    guildID: String,
    guildName: String,
    antiAltDate: String /* Date Of Account */,
    antiAltChannel: String /* Channel for logs */,
    antiInvite: Boolean,
    antiRaid: Boolean,
    autoRole: String /* Role id */,
    blacklistWords: Array /* Words  */,
    chatbotChannel: String /* Channel id  */,
    count: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Count",
    } /* Count */,
    customVoice: String /* Custom voice Channel */,
    prefix: String,
    memberCount: String,
    memberCountChannel: String /* Creates a Channel To Display Member */,
    modLogs: String /* Modlogs channel */,
    ranks: String /* WIP */,
    reactionRoles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ReactionRoles",
    } /* WIP */,
    starboard: String /* Starboard channel id */,
    warn: Array /* Stored Warnings */,
    welcomeChannel: String /* Welcome Channel ID */,
});

var Guilds = mongoose.model("Guilds", guildsSchema);

module.exports = Guilds;
