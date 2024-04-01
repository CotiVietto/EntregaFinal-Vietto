import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='Counter border border-gray-300 rounded p-4'>
      <div className='controls flex items-center justify-center'>
        <button className='button border border-gray-300 rounded px-4 py-2 mr-2' onClick={decrement}>-</button>
        <h4 className='number'>{quantity}</h4>
        <button className='button border border-gray-300 rounded px-4 py-2 ml-2' onClick={increment}>+</button>
      </div>
      <div className="text-center mt-4">
        <button className='button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => onAdd(quantity)} disabled={quantity > stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;