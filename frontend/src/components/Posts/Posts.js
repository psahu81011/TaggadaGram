import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

const Posts = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={1}/>
      <Grid item xs={12} sm={7}>
        <Post/>
        <br />
        <Divider/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <PostForm/>
      </Grid>
      <Grid item xs={12} sm={1}/>
    </Grid>
  )
}

export default Posts;