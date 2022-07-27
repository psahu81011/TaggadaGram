import { Grid } from '@material-ui/core';
import React from 'react';
import Comments from './Comments/Comments';
import Post from './Post/Post';

const Posts = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={1}/>
      <Grid item xs={12} sm={7}>
        <Post/>
        <Grid container spacing={2}>
          <Grid item xs={1} />
          <Grid item xs={10} >
            <Comments/>
          </Grid>
          <Grid item xs={1} />

        </Grid>
      </Grid>
      <Grid item xs={12} sm={3}>Form</Grid>
      <Grid item xs={12} sm={1}/>
    </Grid>
  )
}

export default Posts;