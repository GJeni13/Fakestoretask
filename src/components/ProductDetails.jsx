import React from 'react';

const ProductDetails = ({ product, goBack, addToCart }) => {
  return (
    <div className="p-6">
      <button 
        className="mb-4 text-blue-500 text-xl underline" 
        onClick={goBack}
      >
        Back to Products
      </button>
      <div className="flex flex-col items-center shadow-lg p-6 border rounded-lg">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-60"
        />
        <h2 className="mt-4 font-bold text-2xl">{product.title}</h2>
        <p className="mt-2 text-gray-700 text-lg">{product.description}</p>
        <p className="mt-4 font-bold text-3xl">${product.price}</p>
        <button
          className="bg-blue-500 mt-6 px-6 py-2 rounded text-white"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
