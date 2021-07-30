import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartQty, setcartQty] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, qty) => {
    if (cartItems.some(product => product.name === item.name)) {
      const copy = [...cartItems];
      const repeteadIndex = cartItems.findIndex(
        product => product.name === item.name
      );
      copy[repeteadIndex] = {
        ...copy[repeteadIndex],
        qty: copy[repeteadIndex].qty + qty
      };
      setCartItems(copy);
    } else {
      setCartItems([...cartItems, { ...item, qty }]);
    }
    setcartQty(prev => prev + qty);
  };

  return (
    <CartContext.Provider value={{ cartQty, cartItems, addItem}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;