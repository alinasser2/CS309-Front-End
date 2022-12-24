import React from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Register from './Pages/Regester'
import Login  from './Pages/Login'
import Home from './Pages/Home'
import About from './Pages/About' 
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Header from './PagesComponents/NavBar'
import ShoppingCartProvider from './cont/ShoppingCart'
import './App.css'
function App() {
  
 
    return (
   
//  <ShoppingCartProvider>
  <BrowserRouter> 
 <Header/>
   <Routes>
   
   <Route  excet path="/" element={<Home/>} />
    <Route  path="/Login" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />  
    <Route path="/About" element={<About/>} />  
    <Route path="/" element={<ProductList/>} />  
    <Route path="/Product/:id" element={<Product/>} />  
    {/* <Route path="/Register" element={<Register/>} />  
    <Route path="/Register" element={<Register/>} />   */}
         </Routes>
  </BrowserRouter> 
  //  {/* </ShoppingCartProvider> */}
 
  );
    }
    export default App;