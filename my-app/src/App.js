import React from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Register from './Pages/Regester'
import Login  from './Pages/Login'
import Home from './Pages/Home'
function App() {
  
 
    return (
 <BrowserRouter>
<Link to="/">Home</Link> 
<hr />
<Link to="/Login">Login</Link> 
<hr />
<Link to="/Register">Register</Link> 
<hr />

   
   <Routes>
   
   <Route  excet path="/" element={<Home/>} />

    <Route  path="/Login" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />  
         </Routes>
  </BrowserRouter> 
  );
    }
    export default App;