import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, getTotal } = useContext(CartContext);
 
    if(totalQuantity === 0) {
        return (
            <div className="cart-empty">
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className='option'>Productos</Link>
            </div>
        );
    }
    return ( 
        <div className="cart-container" style={{ padding: '70px'}}>
            { cart.map (product => <CartItem key={product.id} product = {product} /> )}
            <div style={{ backgroundColor: 'rgba(211, 211, 211, 0.5)', padding: '30px', borderRadius: '5px', marginTop: '20px' }}>
                <h3 className='Total' style={{ fontWeight: 'bold' }}>Total compra: ${getTotal()}</h3>
            </div>
            <div style={{ marginTop: '30px' }}>
                <button onClick={() => clearCart()} className='Button bg-blue-200 hover:bg-blue-400 text-blue-800 font-bold py-2 px-3 rounded inline-block text-m mr-4'>Limpiar Carrito</button>
                <Link to='/checkout' className='Button bg-blue-200 hover:bg-blue-400 text-blue-800 font-bold py-2 px-3 rounded inline-block text-m'>Generar orden</Link>
            </div>
        </div>
    );
    
    
};
 
export default Cart;
