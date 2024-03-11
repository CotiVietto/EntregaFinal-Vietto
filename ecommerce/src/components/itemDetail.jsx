import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ name, img, description, price, stock }) => {
  return (
    <article className='CardItem max-w-xl mx-auto p-4 bg-white rounded-lg shadow-lg flex'>
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
        <footer className='ItemFooter mt-4'>
          <ItemCount initial={1} stock={stock} onAdd={() => console.log('Cantidad agregada')} />
        </footer>
      </div>
    </article>
  );
}

export default ItemDetail;


