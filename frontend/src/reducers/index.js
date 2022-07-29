import { combineReducers } from "redux";
import signin from "./signin";
import signup from "./signup";
import posts from "./posts";
import comments from "./comments";

export default combineReducers({
    signin,
    signup,
    posts,
    comments,
});
