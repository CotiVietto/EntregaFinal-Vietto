import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, img, name, price }) => {
  return (
    <div style={{ width: 'calc(100% / 3)', padding: '30px', display: 'inline-block', paddingLeft: '80px', paddingRight: '80px'}}>
      <div className="rounded overflow-hidden shadow-lg">
        <img className="mx-auto" src={img} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">${price}</p>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <div>
            <Link to={`/item/${id}`} className="pl-10">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ver detalles
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;


