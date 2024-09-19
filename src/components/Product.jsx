import React from 'react';

const Product = ({ product, addToCart, viewDetails }) => {
  return (
    <div className="relative shadow-lg hover:shadow-xl p-4 border rounded-lg text-center transition-shadow duration-300 group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.title} 
          className="group-hover:scale-110 mx-auto h-40 transform transition-transform duration-300 cursor-pointer"
          onClick={() => viewDetails(product)}
        />
        
        {/* Cart Button Overlay */}
        <button
          className="top-2 right-2 absolute bg-blue-500 opacity-0 group-hover:opacity-100 px-3 py-2 rounded-full text-white transition-opacity duration-300"
          onClick={() => addToCart(product)}
        >
          <i className="fa-shopping-cart fas"></i> Add to Cart
        </button>
      </div>

      <h2 className="mt-2 font-semibold text-xl">{product.title}</h2>
      <p className="text-gray-700 front-bold">${product.price}</p>
    </div>
  );
};

export default Product;
