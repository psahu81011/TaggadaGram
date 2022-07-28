import { REGISTER } from "../constants/actionTypes";

const signupReducer = (status = false, action) =>{
    switch (action.type) {
        case REGISTER:
            return action.payload.status;
        default:
            return status;
    }
}

export default signupReducer;