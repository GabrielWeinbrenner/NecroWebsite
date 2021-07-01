import { TextField, Typography, Grid, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function GuildPage() {
    const [guild, setGuild] = useState({
        GuildID: "",
        GuildName: "",
        AntiAltDate: 0,
        AntiInvite: false,
        AntiRaid: false,
        AutoRole: "",
        BlacklistWords: [""],
        ChatbotChannel: "",
        Count: {
            Channel: "",
            Count: 0,
            UserID: "",
        },
        CustomVoice: "",
        Prefix: "!necro",
        MemberCount: 0,
        MemberCountChannel: "",
        ModLogs: "",
        Ranks: {
            RankName: "",
            Level: "",
        },
        ReactionRoles: {
            Message: "",
            Roles: [""],
        },
        Starboard: "",
        Warn: [""],
        WelcomeChannel: "",
        Mute: [""],
        GhostPing: false,
    });

    useEffect(() => {
        fetch("http://localhost:3001/guilds")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);
    return (
        <Grid>
            <h1>Guild Change Form</h1>
        </Grid>
    );
}

export default GuildPage;
