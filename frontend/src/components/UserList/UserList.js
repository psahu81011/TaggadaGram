import { Avatar, Box, ButtonBase, Card, CardHeader, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme)=>({
    link:{
        cursor:'pointer',
    }
}))

const UserList = () => {

    const classes = useStyles();
    return (
    <>
        <Box sx={{textAlign:'center'}}>
            <Typography variant='h6' >Taggada Users</Typography>
        </Box>
        <Grid container spacing={2} >
            <Grid item sm={2} />
            <Grid item xs={12} sm={8} >
                <Card>
                    {/* <ButtonBase
                        onClick={()=>console.log('praf')}
                        sx={{flexGrow:1}}
                    > */}

                    <CardHeader 
                        avatar = {<Avatar></Avatar>}
                        title="praf"
                        component={Link}
                        className={classes.link}
                    />
                    {/* </ButtonBase> */}
                </Card>
            </Grid>
            <Grid item sm={2} />
        </Grid>
    </>
  )
}

export default UserList;