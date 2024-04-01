import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext (CartContext)

    return (
            <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
                <img className="w-7" src="../src/assets/cart.png" alt="Cart" />
                { totalQuantity }
            </Link>
    );
};

export default CartWidget;


