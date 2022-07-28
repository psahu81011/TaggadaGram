import * as api from '../api/index';
import { CREATE } from '../constants/actionTypes';


export const createPost = (post, history) => async (dispatch) => {
    try {
        const res = await api.createPost(post);

        dispatch({type:CREATE, payload:res});
    
    } catch (error) {
        console.log(error);
    }
}

