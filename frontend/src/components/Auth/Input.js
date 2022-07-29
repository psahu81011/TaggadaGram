import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/Visibility";

const Input = ({
    name,
    handleChange,
    label,
    half,
    autoFocus,
    type,
    handleShowPassword,
    passwordError,
}) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                error={passwordError}
                name={name}
                onChange={handleChange}
                helperText={passwordError ? "Passwords do not match" : ""}
                variant="outlined"
                required
                label={label}
                autoFocus={autoFocus}
                type={type}
                fullWidth
                InputProps={
                    name === "password"
                        ? {
                              endAdornment: (
                                  <InputAdornment position="end">
                                      <IconButton onClick={handleShowPassword}>
                                          {type === "password" ? (
                                              <Visibility />
                                          ) : (
                                              <VisibilityOff />
                                          )}
                                      </IconButton>
                                  </InputAdornment>
                              ),
                          }
                        : null
                }
            />
        </Grid>
    );
};

export default Input;
