import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white shadow-md">

      {/* Logo */}
      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl shadow-md">
          ⚡
        </div>

        <div className="text-2xl font-bold text-blue-600">
          SkyMart
        </div>

      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8 font-medium">
        <p className="cursor-pointer text-blue-600 hover:text-blue-800">
          Home
        </p>

        <p className="cursor-pointer text-purple-600 hover:text-purple-800">
          Shop
        </p>

        <p className="cursor-pointer text-pink-600 hover:text-pink-800">
          About
        </p>
      </div>

      {/* User & Cart */}
      <div className="flex items-center gap-5">

        <span className="font-semibold text-indigo-600">
          ANUP
        </span>

        <div className="flex items-center gap-2">
          <span className="text-xl">🛒</span>
          <span className="font-bold text-purple-600">
            4
          </span>
        </div>

        <span className="text-xl text-blue-600 cursor-pointer">
          ↪
        </span>

      </div>

    </div>
  )
}

export default Navbar