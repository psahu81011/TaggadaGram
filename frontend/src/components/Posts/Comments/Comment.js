import { Avatar, Card, CardHeader, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

import useStyles from './style';

const Comment = () => {

    const classes = useStyles();

  return (
    <Grid container spacing={1}>
        <div className={classes.border}>
            <div className={classes.username} >
                <Typography variant='body1' className={classes.commenthead}>Raj</Typography>
                <Typography variant='caption' className={classes.time}>time</Typography>
            </div>
            <Typography variant='body2' className={classes.comment}>werghjkl</Typography>
        </div>
    </Grid>
  )
}

export default Comment;