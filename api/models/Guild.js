var mongoose = require("mongoose");

var guildsSchema = new mongoose.Schema({
    GuildID: String,
    GuildName: String,
    AntiAltDate: Number /* Days */,
    AntiInvite: Boolean,
    AntiRaid: Boolean,
    AutoRole: String /* Role id */,
    BlacklistWords: Array /* Words  */,
    ChatbotChannel: String /* Channel id  */,
    Count: {
        Channel: String,
        Count: Number,
        UserID: String,
    } /* Count */,
    CustomVoice: String /* Custom voice Channel */,
    Prefix: String,
    MemberCount: Number,
    MemberCountChannel: String /* Creates a Channel To Display Member */,
    ModLogs: String /* Modlogs channel */,
    Ranks: {
        RankName: String,
        Level: String,
    } /* Rank to be given to the user */,
    ReactionRoles: {
        Message: String,
        Roles: Array,
    } /* WIP */,
    Starboard: String /* Starboard channel id */,
    Warn: Array /* Stored Warnings */,
    WelcomeChannel: String /* Welcome Channel ID */,
    Mute: [
        {
            Channel: String,
            Count: Number,
            UserID: Number,
        },
    ],
    GhostPing: Boolean,
});

var Guilds = mongoose.model("Guilds", guildsSchema);

module.exports = Guilds;
