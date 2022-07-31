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
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import useStyles from "./style";
import Search from "./Search";
import { signOut } from "../../actions/auth";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    const handleLogout = () => {
        dispatch(signOut(user));

        localStorage.removeItem("profile");

        navigate("/");
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

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
                        {/* <Search /> */}
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
                            {/* <MenuItem
                                onClick={navigate(`/profile/${user?.id}`)}
                            >
                                Profile
                            </MenuItem> */}
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
