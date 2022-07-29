import { CREATE, FETCH_POST, FETCH_FEED } from "../constants/actionTypes";

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...posts, action.payload];
        case FETCH_FEED:
            return action.payload;
        case FETCH_POST:
            return action.payload;
        default:
            return posts;
    }
};

export default postReducer;
