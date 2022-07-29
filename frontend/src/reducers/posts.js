import { CREATE, FETCH } from "../constants/actionTypes";

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...posts, action.payload];
        case FETCH:
            return action.payload;
        default:
            return posts;
    }
};

export default postReducer;
