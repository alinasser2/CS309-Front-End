import React from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Register from './Pages/Regester'
import Login  from './Pages/Login'
import Home from './Pages/Home'
import About from './Pages/About' 
function App() {
  
 
    return (
 <BrowserRouter>
<Link to="/">Home</Link> 
<hr />
<Link to="/Login">Login</Link> 
<hr />
<Link to="/Register">Register</Link> 
<hr />
<Link to="/About">About</Link> 
<hr />
   
   <Routes>
   
   <Route  excet path="/" element={<Home/>} />

    <Route  path="/Login" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />  
    <Route path="/About" element={<About/>} />  
    {/* <Route path="/Register" element={<Register/>} />  
    <Route path="/Register" element={<Register/>} />  
    <Route path="/Register" element={<Register/>} />  
    <Route path="/Register" element={<Register/>} />   */}
         </Routes>
  </BrowserRouter> 
  );
    }
    export default App;