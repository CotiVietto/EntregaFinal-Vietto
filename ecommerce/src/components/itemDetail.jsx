import React, { useState, useContext } from 'react'; 
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, name, img, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, name, price
    }

    addItem (item, quantity)
  };

  return (
    <article className='CardItem max-w-xl mx-auto p-4 bg-white rounded-lg shadow-lg flex py-8'>
      <picture className="flex-shrink-0 mr-4">
        <img src={img} alt={name} className='ItemImg w-48 h-auto rounded-lg' />
      </picture>
      <div className="flex-grow">
        <header className='Header'>
          <h2 className='ItemHeader text-2xl font-bold text-gray-800 mb-4'>
            {name}
          </h2>
        </header>
        <section className="mt-4">
          <p className='Info text-gray-700 text-lg'>
            Precio: ${price}
          </p>
          <p className='Description text-gray-700 text-base mt-2'>
            Descripción: {description}
          </p>
        </section>

      <footer className='ItemFooter mt-4 flex justify-center'>
          {quantityAdded > 0 ? (
            <div className="flex">
              <Link to='/cart' className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded inline-block text-sm">Terminar compra</Link>
              <Link to='/' className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded inline-block text-sm">Seguir comprando</Link>
            </div>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )}
      </footer>
      </div>
    </article>

  );
}

export default ItemDetail;