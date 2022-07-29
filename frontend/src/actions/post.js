import * as api from "../api/index";
import {
    CREATE,
    CREATE_COMMENTS,
    FETCH,
    FETCH_COMMENTS,
} from "../constants/actionTypes";

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const likePost = (data) => async (dispatch) => {
    try {
        await api.likePost(data);
    } catch (error) {
        console.log(error);
    }
};

export const getFeed = (id) => async (dispatch) => {
    try {
        const { data } = await api.getFeed(id);

        dispatch({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getComments = (postId) => async (dispatch) => {
    try {
        const { data } = await api.getComments(postId);

        dispatch({ type: FETCH_COMMENTS, payload: data.payload });
    } catch (error) {
        console.log(error);
    }
};

export const insertComment = (comment) => async (dispatch) => {
    try {
        const { data } = await api.insertComment(comment);

        dispatch({ type: CREATE_COMMENTS, payload: data.payload });
    } catch (error) {
        console.log(error);
    }
};
