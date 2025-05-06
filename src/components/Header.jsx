import React from "react";

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
      <h1 className="text-xl font-medium">Crypto App</h1>
      <nav className="space-x-8 text-gray-200 hidden md:flex text-sm font-extralight items-center">
        <a href="" className="hover:text-gray-300">
          Home
        </a>
        <a href="" className="hover:text-gray-300">
          Coins
        </a>
        <a href="" className="hover:text-gray-300">
          About Us
        </a>
        <a href="" className="hover:text-gray-300">
          Features
        </a>
      </nav>
      <button className="border border-orange-400 py-3 px-10 rounded hover:bg-gray-900 transition">
        Get Started
      </button>
    </div>
  );
};

export default Header;
