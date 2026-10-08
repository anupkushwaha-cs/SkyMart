import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Componets/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;