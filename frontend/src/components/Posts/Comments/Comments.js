import { Avatar, Button, Card, CardHeader, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import Comment from './Comment';

const Comments = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

  return (
    <Grid container spacing={1}>
        <Grid component='form' onSubmit={handleSubmit} item xs={12}>
            <TextField />
            <Button type='submit' >Comment</Button>
        </Grid>
        <Grid item xs={12}>
            <Comment />
        </Grid>
        <Grid item xs={12}>
            <Comment />
        </Grid>
    </Grid>
  )
}

export default Comments;