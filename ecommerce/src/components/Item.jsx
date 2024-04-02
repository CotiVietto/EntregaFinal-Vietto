import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Item = ({ id, img, name, price }) => {
  const { addItem } = useContext(CartContext);
  const [alerta, setAlerta] = useState(false); 

  const handleAddToCart = () => {
    addItem({ id, img, name, price }, 1);
    setAlerta(true); 
    setTimeout(() => {
      setAlerta(false); 
    }, 2000); 
  };

  return (
    <div style={{ width: 'calc(100% / 3)', padding: '30px', display: 'inline-block', paddingLeft: '80px', paddingRight: '80px'}}>
      <div className="rounded overflow-hidden shadow-lg">
        <img className="mx-auto" src={img} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">${price}</p>
        </div>
        <div className="px-8 py-2 flex justify-between items-center">
          <div>
            <Link to={`/item/${id}`} className="pl-0">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ver detalles
              </button>
            </Link>
          </div>
          <div className="flex items-center">
            <button onClick={handleAddToCart} className="bg-green-500 hover:bg-green-700 py-2 px-4 rounded ml-2">
              <img src="../src/assets/cart+.png" alt='agregar' style={{ width: '20px' }} />
            </button>
          </div>
        </div>
      </div>
      {alerta && (
        <div className="bg-green-200 text-green-800 p-3 rounded-md mt-2 text-center">
          ¡Producto agregado al carrito!
        </div>
      )}
    </div>
  );
};

export default Item;





