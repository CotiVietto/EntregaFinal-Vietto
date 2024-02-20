import cart from '../assets/cart.png';

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt='carrito' style={{ width: '50px', height: '50px' }} /> 
            <span>0</span>
        </div>
    );
}

export default CartWidget;
