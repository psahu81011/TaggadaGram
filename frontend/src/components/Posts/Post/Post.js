import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Button, Typography } from '@material-ui/core';
import LikeOutlined from '@material-ui/icons/ThumbUpOutlined';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';

import Comments from '../Comments/Comments';

import useStyles from './style';

const Post = () => {

    const classes = useStyles();

    const showLikes = () => {

    }

    const toggleComments = () => {

    }

  return (<>
    <Card className={classes.card}>
        <CardHeader
            avatar = {
                <Avatar></Avatar>
            }
            title = 'Raj Doley'
            subheader='8pm, 12 Agust, 2002'
        />
        <hr />
        <CardContent>
            <Typography variant='body2' >content</Typography>
        </CardContent>
        <CardMedia 
            component='img'
            height="200"
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
            alt='jh'
        />
        <CardActions className={classes.CardActions}>
            <div className={classes.likes}>
                <LikeOutlined />
                <span className={classes.likecount} onClick={showLikes} >1</span>
            </div>
            <CommentIcon onClick={toggleComments} />
        </CardActions>
    </Card>
    
    <Grid container spacing={2} className={classes.comments} >
          <Grid item xs={1} />
          <Grid item xs={10} >
            <Comments/>
          </Grid>
          <Grid item xs={1} />

        </Grid>
    </>
  )
}

export default Post;