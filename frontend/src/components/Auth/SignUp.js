import React, { useEffect, useState } from 'react';
import { Button, Paper, Grid, Typography, Container, Link } from "@material-ui/core";
import Input from './Input';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { signUp } from '../../actions/auth';

const initial = {firstname:'', lastname:'', email:'', password:'', profile_pic:''};

const SignUp = () => {

    const classes = useStyles();
    const status = useSelector((state) => state.signup );
    const [signUpDone, setSignUpDone] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formData, setFormData] = useState(initial);
    const [passwordError, setPasswordError] = useState(false);
    const dispatch = useDispatch();
    const history = useNavigate();


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if(formData.password === confirmPassword){
                dispatch(signUp(formData,history));
                setSignUpDone(true);
            }
        } catch (error) {
            console.log(error);
        }
    };



    const handleChange = (e) => {
        if(e.target.name==='confirmPassword') {
            setConfirmPassword(e.target.value);
            if( formData.password === e.target.value){
                setPasswordError(false);
            }else{
                setPasswordError(true);
            }
        }else{
            setFormData({...formData, [e.target.name]:e.target.value});
        }
        console.log(formData);
    }

    useEffect(() => {
          
    }, [status]);
    
    if(signUpDone){
        return(
            <Paper className={classes.paper}>
                {
                    status ? 
                    <Typography variant='h6' className={classes.largeFont}>
                        SignUp Successful &nbsp;
                        <Link className={classes.link} onClick={()=>history('/login')}>Login</Link>
                    </Typography>
                    :                        
                    <Typography variant='h6' className={classes.largeFont}>
                        User Already exist!!! &nbsp;
                        <Link className={classes.link} onClick={()=>history('/login')}>Login</Link>
                    </Typography>
                }
            </Paper>
        )
    }

    return (
        <Container component="main" maxwidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5"> Sign Up</Typography>
                <Paper component='form' className={classes.form} onSubmit={handleSubmit} elevation={1}>
                    <Grid container spacing={2}>
                        <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus half></Input>
                        <Input name="lastname" label="Last Name" handleChange={handleChange} half ></Input>


                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"  />

                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />

                        <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" passwordError={passwordError} />
                        
                        <div className={classes.fileBase}>
                            <FileBase 
                                type = 'file'
                                multiple ={false}
                                onDone={({base64}) => setFormData({...formData,profile_pic:base64})}
                            />
                        </div>          
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Sign Up</Button>
                </Paper>
                    <Typography variant='body2'>
                        Already have an account? 
                        <Link className={classes.link} onClick={()=>history('/login')}>Login</Link>
                    </Typography>
                    
                    
                    
            </Paper>
        </Container>
    )

}

export default SignUp;