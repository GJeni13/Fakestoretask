import React from 'react';

const CartModal = ({ cartItems, incrementQuantity, decrementQuantity, removeFromCart, closeModal, totalAmount }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full sm:w-96">
        <h2 className="mb-4 font-bold text-2xl">Cart</h2>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  {/* Quantity Controls */}
                  <button 
                    className="bg-gray-300 px-2 py-1 rounded" 
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button 
                    className="bg-gray-300 px-2 py-1 rounded" 
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>

                  {/* Remove Button */}
                  <button 
                    className="bg-red-500 ml-4 px-3 py-1 rounded text-white" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right font-bold text-lg">
              Total: ${totalAmount}
            </div>
          </div>
        ) : (
          <p>Your cart is empty!</p>
        )}
        <button 
          className="bg-red-500 mt-4 px-4 py-2 rounded w-full text-white"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
