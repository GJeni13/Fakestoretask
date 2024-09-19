// src/components/HomePage.js
import React from 'react';
// import wlcome-image from './component/wlcome-mage.jpg'; // Update with the correct path
import image from './image.jpg'
const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 p-4 min-h-screen home-container">
      <img
        src={image}
        alt="Welcome"
        className="shadow-lg mb-4 rounded w-full max-w-2xl h-auto"
      />
      <blockquote className="font-semibold text-center text-gray-800 text-xl dark:text-gray-200">
        <p className='text-xl tracking-wide'>"Shopping is an investment in yourself."</p>
       
      </blockquote>
    </div>
  );
};

export default HomePage;
