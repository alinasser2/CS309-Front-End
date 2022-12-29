import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Register from "./Pages/regester";
import Login from "./Pages/login";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ProductList from "./Pages/ProductList";
import UsersList from "./Pages/UsersList";
import Product from "./Pages/Product";
import AdminProduct from "./Pages/AdminProduct";
import Header from "./PagesComponents/NavBar";
import Footer from "./PagesComponents/Footer";
import CartItem from "./Pages/CartItem";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route excet path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="Product/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="Product/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="Product/About" element={<About />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="Product/ProductList" element={<ProductList />} />
        <Route path="/UsersList" element={<UsersList />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/CartItem" element={<CartItem />} />
        <Route path="Product/CartItem" element={<CartItem />} />
        <Route path="/EditProduct" element={<AdminProduct />} />
        {/* <Route path="/Register" element={<Register/>} />   */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
