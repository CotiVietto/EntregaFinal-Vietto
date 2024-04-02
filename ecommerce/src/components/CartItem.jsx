const CartItem = ({ id , product }) => {

  return (
    <div className="cart-item pl-10">
        {product && (
            <>
                <h3 style={{ fontSize: '25px', fontWeight: 'bold' }}>{product.item.name}</h3>
                <p>Precio: ${product.item.price}</p>
                <p>Cantidad: {product.quantity} </p>
            </>
        )}
    </div>
);



};

export default CartItem;

