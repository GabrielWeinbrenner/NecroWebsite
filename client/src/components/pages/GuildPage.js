import {
    TextField,
    Typography,
    Grid,
    Button,
    FormGroup,
    FormControlLabel,
    Switch,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

function GuildPage() {
    const [guild, setGuild] = useState({
        GuildID: "", //Done
        GuildName: "", //Done
        AntiAltDate: 0,
        AntiInvite: false, //DONE
        AntiRaid: false, //DOne
        AutoRole: "",
        BlacklistWords: [""],
        ChatbotChannel: "",
        Count: {
            Channel: "",
            Count: 0,
            UserID: "",
        },
        CustomVoice: "",
        Prefix: "!necro", // Done
        MemberCountChannel: "",
        MemberCount: 0, // DONE
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
        GhostPing: false, //DONE
    });
    function changeGuild(event, diff, isSwitch = false) {
        if (isSwitch) {
            guild[diff] = event.target.checked;
        } else {
            guild[diff] = event.target.value;
        }
        setGuild({ ...guild });
    }
    useEffect(() => {
        fetch("http://localhost:3001/guilds")
            .then((res) => res.json())
            .then((data) => {
                setGuild(data[16]);
                console.log(data[16]);
            });
    }, []);
    return (
        <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
        >
            <Grid item style={{ padding: "1em" }}>
                <Typography variant="h2">Guild Properties</Typography>
                <Typography variant="h2">Name: {guild.GuildName}</Typography>
                <Typography variant="h2">ID: {guild.GuildID}</Typography>
                <Typography variant="h2">
                    MemberCount: {guild.MemberCount}
                </Typography>
            </Grid>
            <Grid item style={{ padding: "1em" }}>
                <Typography variant="h2">Guild Change Form</Typography>
            </Grid>
            <Grid item style={{ padding: "1em" }}>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={guild.AntiInvite}
                                onChange={(e) =>
                                    changeGuild(e, "AntiInvite", true)
                                }
                                name="AntiInvite"
                            />
                        }
                        label="Anti-Invite"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={guild.AntiRaid}
                                onChange={(e) => changeGuild(e, "", true)}
                                name="AntiRaid"
                            />
                        }
                        label="Anti-Raid"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={guild.GhostPing}
                                onChange={(e) =>
                                    changeGuild(e, "GhostPing", true)
                                }
                                name="GhostPing"
                            />
                        }
                        label="GhostPing"
                    />
                </FormGroup>
            </Grid>
            <Grid item style={{ padding: "1em" }}>
                <TextField
                    id="outlined-required"
                    label="Prefix"
                    variant="outlined"
                    value={guild.Prefix}
                    onChange={(e) => changeGuild(e, "Prefix")}
                />
            </Grid>
        </Grid>
    );
}

export default GuildPage;
