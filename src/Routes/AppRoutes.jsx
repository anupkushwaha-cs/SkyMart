import React from "react";
import { Route, Routes } from "react-router";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Shop from "../Pages/Shop";
import ProductDetails from "../Pages/ProductDetails";

import Cart from "../Componets/Cart";

const AppRoutes = () => {
  return (
    <Routes>

      {/* AUTH ROUTES */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* MAIN WEBSITE */}
      <Route element={<MainLayout />}>
        <Route path="/main" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;