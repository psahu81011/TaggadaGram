import React, { useEffect, useState } from "react";
import {
    AppBar,
    Typography,
    Toolbar,
    Avatar,
    Menu,
    MenuItem,
    Tooltip,
    IconButton,
} from "@material-ui/core";
import { useLocation } from "react-router";

import useStyles from "./style";
import Search from "./Search";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const location = useLocation();

    const classes = useStyles();

    const handleLogout = () => {
        localStorage.removeItem("profile");
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

    return (
        <AppBar position="static" className={classes.appBar} elevation={0}>
            <div className={classes.brandContainer}>
                //logo
                <Typography variant="h4" align="center">
                    TaggadaGram
                </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user && (
                    <>
                        <Search />
                        <Tooltip title="Profile">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={
                                    open ? "account-menu" : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                            >
                                <Avatar
                                    alt={user?.firstname}
                                    src={user?.profile_pic}
                                >
                                    {user?.firstname?.charAt(0)?.toUpperCase()}
                                </Avatar>
                            </IconButton>
                        </Tooltip>

                        <Menu
                            id="profile-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            anchorOrigin={{
                                horizontal: "left",
                                vertical: "bottom",
                            }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem>Profile</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
