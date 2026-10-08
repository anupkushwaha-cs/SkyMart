import React from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("loggedinUser")
  );

  const handleLogout = () => {
    localStorage.removeItem("loggedinUser");
    navigate("/");
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-[#0b1220]/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-lime-300 flex items-center justify-center text-[#0b1220] text-xl shadow-[0_0_20px_rgba(190,255,50,0.25)]">
          ⚡
        </div>

        <div className="text-2xl font-extrabold tracking-tight text-white">
          Sky<span className="text-lime-300">Mart</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-2 font-medium">
        <NavLink
          to="/main"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-lime-300 text-[#0b1220] font-semibold"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-lime-300 text-[#0b1220] font-semibold"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-lime-300 text-[#0b1220] font-semibold"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`
          }
        >
          About
        </NavLink>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <span className="hidden sm:block font-semibold text-gray-200">
          {currentUser ? currentUser.name : "Guest"}
        </span>

        <div className="flex items-center gap-2">
          <NavLink
            to="/cart"
            className="relative w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 hover:border-lime-300/40 hover:bg-lime-300/10 transition-all duration-300"
          >
            <span className="text-xl cursor-pointer">
              🛒
            </span>
          </NavLink>

          <span className="min-w-[24px] h-6 px-1.5 flex items-center justify-center rounded-full bg-lime-300 text-[#0b1220] text-xs font-bold">
            4
          </span>
        </div>

        <button
          onClick={handleLogout}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl text-gray-400 bg-white/5 border border-white/10 cursor-pointer hover:text-lime-300 hover:border-lime-300/40 hover:bg-lime-300/10 transition-all duration-300"
          title="Logout"
        >
          ↪
        </button>
      </div>
    </div>
  );
};

export default Navbar;