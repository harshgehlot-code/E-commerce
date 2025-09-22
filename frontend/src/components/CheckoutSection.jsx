import React, { useState, createContext, useContext } from "react";

// Simple icon components to replace lucide-react
const Minus = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Plus = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

const Trash2 = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="3,6 5,6 21,6"></polyline>
    <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

// Cart Context
const CartContext = createContext();

// Cart Provider Component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    // Updated with local image paths
    {
      id: 1,
      name: "Premium Coffee Cup",
      price: 1500,
      quantity: 1,
      image: "./cup.png" // Your local cup.png file
    },
    {
      id: 2,
      name: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
      image: "./sofa.jpg" // Add your local sofa image
    },
    {
      id: 3,
      name: "Outdoor Table",
      price: 180000,
      quantity: 2,
      image: "./table.jpg" // Add your local table image
    }
  ]);

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      removeFromCart,
      updateQuantity,
      addToCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Image component with error handling for local images
const ProductImage = ({ src, alt, className }) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <span className="text-gray-500 text-xs">Image not found</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleImageError}
    />
  );
};

// Cart Component
const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  // Calculate subtotal & total
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (id, newQuantity) => {
    const quantity = parseInt(newQuantity) || 1;
    updateQuantity(id, quantity);
  };

  const increaseQuantity = (id, currentQuantity) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const decreaseQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  return (
    <div className="p-4 lg:p-10 flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
      {/* Left: Cart Items */}
      <div className="flex-1">
        {/* Table Header */}
        <div className="hidden lg:grid grid-cols-6 bg-orange-50 p-4 font-semibold rounded-t-lg border">
          <span className="col-span-2">Product</span>
          <span className="text-center">Price</span>
          <span className="text-center">Quantity</span>
          <span className="text-center">Subtotal</span>
          <span className="text-center">Action</span>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="bg-white border rounded-b-lg p-8 text-center">
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
            <button className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="bg-white border-x border-b rounded-b-lg">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-6 items-center p-4 gap-4 ${
                  index !== cart.length - 1 ? 'border-b' : ''
                }`}
              >
                {/* Product Image + Name */}
                <div className="col-span-1 lg:col-span-2 flex items-center gap-4">
                  <ProductImage
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-lg border"
                  />
                  <div>
                    <span className="text-gray-800 font-medium">{item.name}</span>
                    <div className="lg:hidden text-sm text-gray-500 mt-1">
                      Rs. {item.price.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Price - Hidden on mobile */}
                <div className="hidden lg:block text-center">
                  <span className="text-gray-600">Rs. {item.price.toLocaleString()}</span>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-center lg:justify-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id, item.quantity)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={14} className={item.quantity <= 1 ? 'text-gray-300' : 'text-gray-600'} />
                  </button>
                  
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={item.quantity}
                    className="w-16 h-8 border border-gray-300 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  />
                  
                  <button
                    onClick={() => increaseQuantity(item.id, item.quantity)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Plus size={14} className="text-gray-600" />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-center">
                  <span className="text-gray-800 font-medium">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>

                {/* Delete Button */}
                <div className="text-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    title="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            
            {/* Clear Cart Button */}
            {cart.length > 0 && (
              <div className="p-4 border-t bg-gray-50">
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right: Cart Totals */}
      {cart.length > 0 && (
        <div className="w-full lg:w-96 bg-orange-50 p-6 rounded-lg h-fit border">
          <h2 className="text-xl font-bold mb-6 text-gray-800">Cart Totals</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800">
                Rs. {subtotal.toLocaleString()}
              </span>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-800">Free</span>
            </div>
            
            <hr className="border-gray-300" />
            
            <div className="flex justify-between items-center py-2">
              <span className="font-semibold text-gray-800">Total</span>
              <span className="text-orange-600 font-bold text-lg">
                Rs. {subtotal.toLocaleString()}
              </span>
            </div>
          </div>
          
          <button className="w-full border-2 border-black rounded-lg py-3 font-medium hover:bg-black hover:text-white transition-colors duration-200">
            Check Out
          </button>
          
          <button className="w-full mt-3 text-gray-600 py-2 font-medium hover:text-gray-800 transition-colors">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

// Main App Component that includes the CartProvider
const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Shopping Cart</h1>
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;