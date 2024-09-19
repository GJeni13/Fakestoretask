// 
import React from 'react';
import HomePage from './HomePage';


const Navbar = ({ cartCount, openCartModal }) => {
  return (
    <nav className="justify-between items-center mt-4 p-4 text-white">
      <div className="flex justify-between items-center mx-10">
      <h1 className="font-bold text-6xl md:text-8xl gradient-text" style={{ fontFamily: 'Lobster, cursive' }}>
        Welcome to the Store!
      </h1>
      <button 
        className="flex justify-around bg-green-500 px-4 py-2 rounded-full text-2xl"
        onClick={openCartModal}
        >
        Cart {cartCount}
      </button>
          </div>
      <HomePage></HomePage>
    </nav>
  );
};

export default Navbar;
