import { Grid, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./style";

const Comment = (comment) => {
    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <div className={classes.border}>
                <div className={classes.username}>
                    <Typography variant="body1" className={classes.commenthead}>
                        {comment.userFullName}
                    </Typography>
                    <Typography variant="caption" className={classes.time}>
                        {comment.createdAt}
                    </Typography>
                </div>
                <Typography variant="body2" className={classes.comment}>
                    {comment.content}
                </Typography>
            </div>
        </Grid>
    );
};

export default Comment;
