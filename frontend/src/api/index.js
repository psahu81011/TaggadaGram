import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:3200/'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.token = `${JSON.parse(localStorage.getItem('profile')).randomString}`; ///might throw error in backend
    }
});

export const signUp = (formData) => API.post('register',formData);
export const signIn = (formData) => API.post('login',formData);

export const createPost = (post) => API.post('addpost',post);
export const likePost = (data) => API.post('likepost',data); //userid, postid