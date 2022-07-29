import { Button, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertComment } from "../../../actions/post";
import Comment from "./Comment";

const initial = { postId: "", comment: { userId: "", content: "" } };

const Comments = (postId) => {
    const [commentText, setCommentText] = useState("");
    const [commentData, setCommentData] = useState(initial);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));

    const comments = useSelector((state) => state.comments);

    const handleSubmit = (e) => {
        e.preventDefault();

        setCommentData({ ...commentData, postId: postId });
        setCommentData({
            ...commentData,
            comment: { ...comment, userId: user.id },
        });
        setCommentData({
            ...commentData,
            comment: { ...comment, content: commentText },
        });

        dispatch(insertComment(commentData));
    };

    useEffect(() => {}, [dispatch]);

    return (
        <Grid container spacing={1}>
            <Grid component="form" onSubmit={handleSubmit} item xs={12}>
                <TextField
                    onChange={(e) => setCommentText(e.target.value)}
                    value={comment}
                    placeholder="Taggade Vichar"
                />
                <Button type="submit">Comment</Button>
            </Grid>
            {comments.map((comment, index) => {
                <Grid item xs={12} key={index}>
                    <Comment comment={comment} />
                </Grid>;
            })}
        </Grid>
    );
};

export default Comments;
