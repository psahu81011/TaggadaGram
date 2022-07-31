import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3200/" });

API.interceptors.request.use(
    (req) => {
        if (localStorage.getItem("profile")) {
            req.headers.token = `Bearer ${
                JSON.parse(localStorage.getItem("profile")).token
            } ${JSON.parse(localStorage.getItem("profile")).id}`; ///might throw error in backend
        }
        return req;
    },
    (error) => {
        console.log("interceptor error", error);
        return Promise.reject(error);
    }
);

export const signUp = (formData) => API.post("register", formData);
export const signIn = (formData) => API.post("login", formData);
export const signOut = (user) => API.post("/userlogout", user);

export const createPost = (post) => API.post("addpost", post);
export const likePost = (data) => API.post("likepost", data);
export const getFeed = (id) => API.get(`/getnewsfeed/${id}`);
export const getMyPost = (id) => API.get(`/myposts/${id}`);
export const getComments = (postId) => API.get(`/getcomments/${postId}`);
export const insertComment = (comment) => API.post("/insertcomment", comment);
