import React from "react"
 import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Regester from './regesterrr'
import Login from './loggin'
 function App() {
  
 
    return (
    <BrowserRouter>

   <Routes>

 <Route path="/login" element={<Login/>} />
     <Route  path="/regester" element={<Regester/>} /> 
   
     </Routes>
   </BrowserRouter> 


      );
    }
    export default App;