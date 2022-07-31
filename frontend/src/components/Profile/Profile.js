import {
    Button,
    Paper,
    Grid,
    Typography,
    Container,
    Link,
    Avatar,
    Divider,
} from "@material-ui/core";
import { CenterFocusStrong } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { getMyPost } from "../../actions/post";
import Post from "../Posts/Post/Post";

import useStyles from "./style";

const Profile = () => {
    const classes = useStyles();

    const location = useLocation();
    const username = useParams().id;
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    const user = JSON.parse(localStorage.getItem("profile"));

    useEffect(() => {
        dispatch(getMyPost(username));

        console.log(username);
    }, []);

    return (
        <>
            <Container component="main" maxwidth="xs">
                <Paper
                    className={classes.paper}
                    elevation={3}
                    variant="outlined"
                >
                    {username === user?.id && (
                        <Grid
                            container
                            spacing={2}
                            wrap="nowrap"
                            direction="column"
                            className={classes.btn}
                        >
                            <Grid item xs={5}>
                                <Button className={classes.button1}>
                                    Update password
                                </Button>
                            </Grid>

                            <Grid item xs={5}>
                                <Button className={classes.button1}>
                                    Update username
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                    <Grid>
                        <Grid container spacing={5} direction="row">
                            <Avatar
                                variant="rounded"
                                alt="ok"
                                style={{
                                    width: 250,
                                    height: 250,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    alignContent: "center",
                                    borderRadius: "50%",
                                }}
                                src={user?.profile_pic}
                            />
                        </Grid>
                        <Grid>
                            <Typography className={classes.typo}>
                                {user?.id}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid className={classes.grd}>
                        <Grid container wrap="nowrap">
                            <Button className={classes.button}>
                                Following: {user?.listFollowing?.length}
                            </Button>
                        </Grid>

                        <Grid container wrap="nowrap" direction="column">
                            <Button disableElevation className={classes.button}>
                                Posts: {posts.length}
                            </Button>
                        </Grid>

                        <Grid container wrap="nowrap">
                            <Button className={classes.button}>
                                Followers: {user?.listFollowers?.length}
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>

                <Paper>
                    <Grid
                        container
                        spacing={3}
                        wrap="nowrap"
                        direction="column"
                    >
                        <Grid item sm={2} />
                        {posts.map((post, index) => (
                            <Grid item xs={12} sm={7} key={index}>
                                <Post post={post} />
                                <br />
                                <Divider />
                            </Grid>
                        ))}
                        <Grid item sm={2} />
                    </Grid>
                </Paper>
            </Container>
        </>
    );
};

export default Profile;
