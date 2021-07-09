import { TextField, Typography, Grid, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";

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
    function changeGuild(event, diff) {
        guild[diff] = event.target.value;
        setGuild({ ...guild });
    }
    useEffect(() => {
        fetch("http://localhost:3001/guilds")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);
    return (
        <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
        >
            <Grid item>
                <Typography variant="h2">Guild Change Form</Typography>
            </Grid>
            <Grid item>
                <TextField
                    id="outlined-required"
                    label="Prefix"
                    variant="outlined"
                    value={guild.Prefix}
                    onChange={(e) => changeGuild(e, "Prefix")}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="outlined-required"
                    label="Anti-Invite"
                    variant="outlined"
                    value={guild.description}
                    onChange={(e) => changeGuild(e, "description")}
                />
            </Grid>
        </Grid>
    );
}

export default GuildPage;
