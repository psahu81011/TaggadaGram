import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Button,
    Typography,
} from "@material-ui/core";
import LikeOutlined from "@material-ui/icons/ThumbUpOutlined";
import LikeIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";

import Comments from "../Comments/Comments";

import useStyles from "./style";
import { getComments, likePost } from "../../../actions/post";

const Post = (post) => {
    const [showComments, setShowComments] = useState(false);
    const [liked, setLiked] = useState(false); //check if user liked from localstorage
    const [likeCount, setLikeCount] = useState(post?.likesList?.length);
    const dispatch = useDispatch();

    const classes = useStyles();

    const showLikes = () => {};

    const toggleLike = () => {
        if (liked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        dispatch(likePost({ postId: post?.postId, userId: post?.userId }));
        setLiked(!liked);
    };

    const toggleComments = () => {
        dispatch(getComments(post?.postId));
        setShowComments(!showComments);
    };

    useEffect(() => {}, [likeCount, showComments]);

    return (
        <>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar src={post?.profile_pic}>
                            {post?.userName?.charAt(0)?.toUpperCase()}
                        </Avatar>
                    }
                    title={post?.userName}
                    subheader={post?.created_at}
                />
                <hr />
                <CardContent>
                    <Typography variant="body2">{post?.content}</Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height="300"
                    image={post?.image}
                    alt={post?.content}
                />
                <CardActions className={classes.CardActions}>
                    <div className={classes.likes}>
                        <span onClick={toggleLike}>
                            {liked ? <LikeIcon /> : <LikeOutlined />}
                        </span>
                        <span className={classes.likecount} onClick={showLikes}>
                            {likeCount}
                        </span>
                    </div>
                    <CommentIcon onClick={toggleComments} />
                </CardActions>
            </Card>

            <Grid
                container
                spacing={2}
                className={showComments ? "" : classes.comments}
            >
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <Comments postId={post?.postId} />
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </>
    );
};

export default Post;
