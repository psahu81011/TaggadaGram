
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/Auth/SignIn.js';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';
import UserList from './components/UserList/UserList.js';
import SignUp from './components/Auth/SignUp.js';

function App() {
  return (
    
    <BrowserRouter>
      <Container maxWidth='md' >
        <Navbar />
      <Routes>
        <Route path='/' exact element={<Posts />} />
        <Route path='/login' element={<SignIn/>} />
        <Route path='/register' element={<SignUp/>} />
      </Routes>
      </Container>
    </BrowserRouter>
      
  );
}

export default App;




// import './App.css';

// function App() {


//   return (
//     <Container maxWidth='md' >
//         <Navbar />
//         <Posts />
//     </Container>
//   );
// }

// export default App;
