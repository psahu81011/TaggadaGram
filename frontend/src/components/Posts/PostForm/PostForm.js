import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";
import { Grid } from "@material-ui/core";
import useStyles from "./style";
import { createPost } from "../../../actions/post";

const initial = { content: "", image: "", created_at: "", userId: "" };

const PostForm = () => {
    const classes = useStyles();

    const [post, setPost] = useState(initial);
    const dispatch = useDispatch();
    const history = useNavigate();
    const user = JSON.parse(localStorage.getItem("profile"));

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const ts = new Date();
            setPost({ ...post, created_at: ts.toJSON(), userId: user?.id });
            dispatch(createPost(post));

            history("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Grid container spacing={2}>
            <Paper
                elevation={1}
                component="form"
                onSubmit={handleSubmit}
                className={classes.createPost}
            >
                <Typography variant="h6" className={classes.text}>
                    Taggada Thoughts
                </Typography>

                <Grid container direction="column">
                    <TextField
                        variant="outlined"
                        name="textmessage"
                        placeholder="Your Thoughts"
                        value={post.content}
                        multiline
                        minRows={6}
                        maxRows={10}
                        onChange={(e) =>
                            setPost({ ...post, content: e.target.value })
                        }
                        className={classes.text}
                    />

                    <Grid item xs={12} className={classes.fileBase}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                                setPost({ ...post, image: base64 })
                            }
                        />
                    </Grid>

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onSubmit={handleSubmit}
                    >
                        Post
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default PostForm;
