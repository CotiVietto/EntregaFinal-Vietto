import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, getTotal, removeItem } = useContext(CartContext);
 
    return ( 
        <div className="cart-container p-10">
            { cart.map (product => (
                <div key={product.item.id} className="cart-item-container py-5">
                    <CartItem product={product} />
                    <button 
                        onClick={() => removeItem(product.item.id)} 
                        className="remove-item-button bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-5 pl-30 rounded inline-block"
                    >
                       <span className="pr-10"><span className='text-bold'> ✖️ </span>Eliminar item</span>
                    </button>
                </div>
            ))}
            <div className="bg-green-200 p-4 rounded mt-4">
                <h3 className='Total font-bold pl-10'> ▶️ Total compra: ${getTotal()}</h3>
            </div>
            <div className="mt-4">
                <button onClick={() => clearCart()} className='Button bg-blue-200 hover:bg-blue-400 text-blue-800 font-bold py-2 px-3 rounded inline-block mr-4'>Limpiar Carrito</button>
                <Link to='/checkout' className='Button bg-blue-200 hover:bg-blue-400 text-blue-800 font-bold py-2 px-3 rounded inline-block'>Generar orden</Link>
            </div>
        </div>
    );
};

export default Cart;
