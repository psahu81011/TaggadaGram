import { Divider, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { getFeed } from "../../actions/post";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const Posts = () => {
    const posts = useSelector((state) => state.posts);

    const location = useLocation();
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        console.log(id);
        dispatch(getFeed(id));
    }, [location, posts]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={1} />
            {posts.map((post, index) => (
                <Grid item xs={12} sm={7} key={index}>
                    <Post post={post} />
                    <br />
                    <Divider />
                </Grid>
            ))}
            <Grid item xs={12} sm={3}>
                <PostForm />
            </Grid>
            <Grid item xs={12} sm={1} />
        </Grid>
    );
};

export default Posts;
