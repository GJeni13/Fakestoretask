import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import CartModal from './components/CartModal';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';



const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  // Add product to cart and manage quantity
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Increment quantity
  const incrementQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Decrement quantity
  const decrementQuantity = (id) => {
    const product = cart.find(item => item.id === id);
    if (product.quantity > 1) {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      // Remove product from cart if quantity reaches 0
      setCart(cart.filter(item => item.id !== id));
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calculate total amount
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };
 

  // Handle opening/closing cart modal
  const openCartModal = () => setIsCartOpen(true);
  const closeCartModal = () => setIsCartOpen(false);

  const viewProductDetails = (product) => setSelectedProduct(product);
  const goBackToProductList = () => setSelectedProduct(null);

  return (
    <div>
      <Navbar cartCount={cart.length} openCartModal={openCartModal} />
      
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} goBack={goBackToProductList} addToCart={addToCart} />
      ) : (
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 shadow-lg p-6 rounded-lg">
          {products.map(product => (
            <Product 
              key={product.id} 
              product={product} 
              viewDetails={viewProductDetails} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      )}

      {isCartOpen && (
        <CartModal
          cartItems={cart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeFromCart={removeFromCart}
          closeModal={closeCartModal}
          totalAmount={calculateTotal()}
        />
      )}
      <Footer /> 
    </div>
  );
};

export default App;
