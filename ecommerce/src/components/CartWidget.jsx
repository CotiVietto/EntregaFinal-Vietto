import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <div className="relative">
        <img className="w-7" src="../src/assets/cart.png" alt="Cart" />
        <div className="absolute top-3 left-5 h-5 w-5 bg-gray-500 rounded-full flex items-center justify-center text-white text-xs transition-colors  hover:bg-customBlue">
          {itemCount}
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
