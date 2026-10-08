import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Shop from "../Pages/Shop";
import Cart from "../Componets/Cart";
import ProductDetails from "../Pages/ProductDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Shop />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;