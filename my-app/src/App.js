import React from "react"
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Regester from './Pages/Regester'
import Login from './Pages/login'
import Home from './Pages/Home';
// // import {} from '';
// // import Axios from "./Services/axiosService";
// // import AxiosContext from "./Services/context";



 function App() {
  
 
    return (
    <BrowserRouter>

   <Routes>
   <Route excet path="/" element={<Home/>} />
   <Route path="/login" element={<Login/>} />
   <Route  path="/regester" element={<Regester/>} /> 
    {/* <Route path='/' element={}/> */} 
   </Routes>
   </BrowserRouter> 


      );
    }
    export default App;