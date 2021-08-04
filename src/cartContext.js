import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartQty, setcartQty] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
 

  const addItem = (item, qty, price) => {
    if (cartItems.some(product => product.name === item.name)) {
      const copy = [...cartItems];
      console.log(copy);
      const repeteadIndex = cartItems.findIndex(
        product => product.name === item.name
      );
      copy[repeteadIndex] = {
        ...copy[repeteadIndex],
        qty: copy[repeteadIndex].qty + qty,
        price: price*(copy[repeteadIndex].qty + qty)
      };
      setCartItems(copy);
    } else {
      setCartItems([...cartItems, {...item, qty, price:price*qty}]);
    }
    setcartQty(prev => prev + qty);
    
  };

  const deleteItem = (item) => {
    if(cartItems.some(product => product.name === item.name)){
      const copy = [...cartItems];
      
      const Index = cartItems.findIndex(
        product => product.name === item.name
      );
      const Unitprice= copy[Index].price / copy[Index].qty;

      copy[Index] = {
        ...copy[Index],
        qty: copy[Index].qty - 1,
        price: (copy[Index].price - Unitprice)
      };

      if (copy[Index].qty === 0) {
        copy.splice(Index, 1);
      }

      setCartItems(copy);
      setcartQty(prev => prev - 1);
      
    }
    
  };

  const GetTotalPrice = ()=>{
    const copy = [...cartItems];
    console.log(cartItems)
    if(copy.length>0){
      const totalP=copy.reduce((accumulator, currentValue) => accumulator + currentValue.price,0);
      setTotalPrice(totalP);
    }
    else{
      setTotalPrice(0);
    }
  }
  

  return (
    <CartContext.Provider value={{ cartQty, cartItems, addItem, deleteItem, GetTotalPrice, totalPrice}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;