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
        <Route excet path="/CS309-Front-End/" element={<Home />} />
        <Route path="/CS309-Front-End/Login" element={<Login />} />
        <Route path="/CS309-Front-End/Product/Login" element={<Login />} />
        <Route path="/CS309-Front-End/Register" element={<Register />} />
        <Route path="/CS309-Front-End/Product/Register" element={<Register />} />
        <Route path="/CS309-Front-End/About" element={<About />} />
        <Route path="/CS309-Front-End/Product/About" element={<About />} />
        <Route path="/CS309-Front-End/ProductList" element={<ProductList />} />
        <Route path="/CS309-Front-End/Product/ProductList" element={<ProductList />} />
        <Route path="/CS309-Front-End/UsersLis" element={<UsersList />} />
        <Route path="/CS309-Front-End/Product/:id" element={<Product />} />
        <Route path="/CS309-Front-End/CartItem" element={<CartItem />} />
        <Route path="/CS309-Front-End/Product/CartItem" element={<CartItem />} />
        <Route path="/CS309-Front-End/EditProduct" element={<AdminProduct />} />
        {/* <Route path="/CS309-Front-End/Register" element={<Register/>} />   */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
