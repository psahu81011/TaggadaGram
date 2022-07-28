import * as api from '../api/index';
import { LOGIN, REGISTER } from '../constants/actionTypes';

export const signIn = (formData, history) => async (dispatch) => {
    try {
        const res = await api.signIn(formData);

        dispatch({ type: LOGIN, payload: data });


        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: REGISTER, payload:data});
         
        history.push('/login');
    } catch (error) {
        console.log(error);
    }
}