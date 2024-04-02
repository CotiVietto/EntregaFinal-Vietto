import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cart: []
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!inInCart(item.id)) {
      setCart(prev => [...prev, { item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.item.price * item.quantity), 0);
  };

  const removeItem = itemId => {
    const cartUpdated = cart.filter(prod => prod.item.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const inInCart = (itemId) => {
    return cart.some(prod => prod.item.id === itemId);
  };

  const deleteItem = itemId => {
    const cartUpdated = cart.filter(prod => prod.item.id !== itemId);
    setCart(cartUpdated);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getTotal, deleteItem  }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;