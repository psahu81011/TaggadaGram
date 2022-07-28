import { LOGIN } from "../constants/actionTypes";

const signinReducer = (user = {}, action) =>{
    switch (action.type) {
        case LOGIN:
            return action.payload;
        default:
            return user;
    }
}

export default signinReducer;