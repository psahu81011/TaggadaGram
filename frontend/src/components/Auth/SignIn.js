import React, { useEffect, useState } from "react";
import {
    Button,
    Paper,
    Grid,
    Typography,
    Container,
    Link,
} from "@material-ui/core";
import Input from "./Input";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { signIn } from "../../actions/auth";

const initial = { email: "", password: "" };

const SignIn = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("profile"));
    const data = useSelector((state) => state.signin);
    const [signInDone, setSignInDone] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initial);
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();

    const handleShowPassword = () =>
        setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            dispatch(signIn(formData, history));
            setSignInDone(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        console.log(formData);
    };

    useEffect(() => {
        if (user) history(`/feed/${user?.id}`);
    }, [data, location]);

    if (signInDone) {
        if (!data.status) {
            return (
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.largeFont}>
                        Invalid Credentials!!! &nbsp;
                        <Link
                            className={classes.link}
                            onClick={() => {
                                setSignInDone(false);
                                history("/login");
                            }}
                        >
                            Try Again
                        </Link>
                    </Typography>
                </Paper>
            );
        }
    }

    return (
        <Container component="main" maxwidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">Sign In</Typography>
                <Paper
                    component="form"
                    className={classes.form}
                    onSubmit={handleSubmit}
                    elevation={1}
                >
                    <Grid container spacing={2}>
                        <Input
                            name="email"
                            label="Email Address"
                            handleChange={handleChange}
                            type="email"
                        />

                        <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </Paper>
                <Typography variant="body2">
                    Do not have an account?
                    <Link
                        className={classes.link}
                        onClick={() => history("/register")}
                    >
                        Create Account
                    </Link>
                </Typography>
            </Paper>
        </Container>
    );
};

export default SignIn;
