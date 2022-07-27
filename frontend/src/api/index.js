import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:3200/'});

export const signUp = (formData) => API.post('register',formData);
export const signIn = (formData) => API.post('login',formData);