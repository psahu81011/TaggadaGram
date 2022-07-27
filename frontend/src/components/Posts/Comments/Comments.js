import { Avatar, Card, CardHeader, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Comment from './Comment';

const Comments = () => {
  return (
    <Grid container spacing={1}>
        <Grid item xs={12}>
            <Comment />
        </Grid>
    </Grid>
  )
}

export default Comments;