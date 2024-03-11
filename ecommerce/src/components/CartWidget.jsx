import ItemCount from './ItemCount';

import React from 'react';

const CartWidget = () => {
    return (
        <div className="relative">
            <img className="w-7" src="../src/assets/cart.png" alt="Cart" />
            <div className="absolute top-3 left-5 h-5 w-5 bg-gray-500 rounded-full flex items-center justify-center text-white text-xs transition-colors  hover:bg-customBlue">
                <span className="font-bold">
                    {ItemCount}
                </span>
            </div>
        </div>
    );
};

export default CartWidget;

