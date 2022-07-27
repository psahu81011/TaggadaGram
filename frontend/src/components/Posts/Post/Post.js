import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import LikeOutlined from '@material-ui/icons/ThumbUpOutlined';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';

import useStyles from './style';

const Post = () => {

    const classes = useStyles();

  return (
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
        <CardActions >
            <div>
                <IconButton >
                    <LikeOutlined/>
                </IconButton>
                likecount
            </div>
            <IconButton><CommentIcon/></IconButton>
        </CardActions>
    </Card>
  )
}

export default Post;