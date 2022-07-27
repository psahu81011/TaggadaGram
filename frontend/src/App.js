
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth.js';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';

function App() {
  return (
    
    <BrowserRouter>
      <Container maxWidth='md' >
        <Navbar />
      <Routes>
        <Route path='/' exact element={<Posts />} />
        <Route path='/login' element={<Auth/>} />
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
