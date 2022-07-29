import { LOGIN, LOGOUT } from "../constants/actionTypes";

const signinReducer = (user = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return {};
        default:
            return user;
    }
};

export default signinReducer;
