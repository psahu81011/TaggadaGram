import React, { useState } from 'react';
import { Button, Paper, Grid, Typography, Container, Link } from "@material-ui/core";
import Input from './Input';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { signUp, signIn } from '../../actions/auth';

const initial = {firstname:'', lastname:'', email:'', password:'', profile_pic:''};

const Auth = () => {

    const classes = useStyles();
    const user = useSelector((state) => state.auth );
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initial);
    const [passwordError, setPasswordError] = useState(false);
    const dispatch = useDispatch();
    const history = useNavigate();


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if(isSignUp && formData.password === confirmPassword){
                dispatch(signUp(formData,history));
            }else if(!isSignUp){
                dispatch(signIn(formData,history));
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

    

    return (
        <Container component="main" maxwidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5"> {isSignUp ? 'Sign Up' : ' Sign In'}</Typography>
                <Paper component='form' className={classes.form} onSubmit={handleSubmit} elevation={1}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                        <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus half></Input>
                                        <Input name="lastname" label="Last Name" handleChange={handleChange} half ></Input>
                                </>

                            )
                        }

                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"  />

                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />

                        {isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" passwordError={passwordError} />}
                        {isSignUp && 
                            <div className={classes.fileBase}>
                                <FileBase 
                                    type = 'file'
                                    multiple ={false}
                                    onDone={({base64}) => setFormData({...formData,profile_pic:base64})}
                                />
                            </div>
                        }
                                        
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    {isSignUp ?
                        <Typography variant='body2'>
                            Already have an account? 
                            <Link className={classes.link} onClick={()=>setIsSignUp(false)}>Login</Link>
                        </Typography>
                        :
                        <Typography variant='body2'>
                            Do not have an account? 
                            <Link className={classes.link} onClick={()=>setIsSignUp(true)}>Create Account</Link>
                        </Typography>
                    }
                    
                </Paper>
            </Paper>
        </Container>
    )

}

export default Auth;