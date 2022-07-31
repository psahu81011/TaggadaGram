import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./components/Auth/SignIn.js";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import UserList from "./components/UserList/UserList.js";
import SignUp from "./components/Auth/SignUp.js";
import Profile from "./components/Profile/Profile.js";

function App() {
    return (
        <BrowserRouter>
            <Container maxWidth="md">
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Navigate to="/login" />} />
                    <Route path="/feed/:id" element={<Posts />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/register" element={<SignUp />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
