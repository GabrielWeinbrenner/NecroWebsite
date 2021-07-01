import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        marginBottom: "4.1em",
    },
    logo: {
        height: "4em",
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    tab: {
        minWidth: 10,
        marginLeft: "25px",
    },
    tabContainer: {
        marginLeft: "auto",
    },
    appBar: {
        background: "#777B7E",
        borderRadius: "0.5em",
        boxShadow: "none",
        alignItems: "center",
    },
    heading: {
        marginRight: "2em",
    },
}));

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
const Header = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar disableGutters={true}>
                        <IconButton
                            edge="start"
                            className={classes.logo}
                            color="inherit"
                            aria-label="menu"
                        >
                            🐉
                        </IconButton>
                        <Typography variant="h5" className={classes.heading}>
                            NecroAtomicBot
                        </Typography>
                        <Tabs
                            className={classes.tabContainer}
                            indicatorColor="primary"
                        >
                            <Tab
                                component={Link}
                                to="/"
                                label="Home"
                                value={false}
                            />
                            <Tab
                                component={Link}
                                to="/guild"
                                label="Guild"
                                value={false}
                            />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </React.Fragment>
    );
};

export default Header;
