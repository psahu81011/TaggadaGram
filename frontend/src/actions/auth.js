import * as api from "../api/index";
import { LOGIN, LOGOUT, REGISTER } from "../constants/actionTypes";

export const signIn = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        if (data.status === true) {
            dispatch({
                type: LOGIN,
                payload: { user: data.userSign, status: true },
            });
        } else {
            dispatch({ type: LOGIN, payload: { status: false } });
        }
    } catch (error) {
        console.log(error);
    }
};

export const signUp = (formData) => async (dispatch) => {
    try {
        console.log(formData);
        const { data } = await api.signUp(formData);
        if (data.status === true) {
            dispatch({ type: REGISTER, payload: { status: true } });
        } else {
            dispatch({ type: REGISTER, payload: { status: false } });
        }
    } catch (error) {
        console.log(error);
    }
};

export const signOut = () => async (dispatch) => {
    try {
        await api.signOut();
        dispatch({ type: LOGOUT });
    } catch (error) {
        console.log(error);
    }
};
