import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'; 
import CheckOutForm from './checkOutForm';
import { collection, Timestamp, getFirestore, addDoc } from 'firebase/firestore';

const CheckOut = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, getTotal } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            };
            const db = getFirestore();
            const orderCollection = collection(db, 'orders');
            const docRef = await addDoc(orderCollection, objOrder);
            setOrderId(docRef.id);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return (
            <div className='my-8 mx-auto max-w-xl bg-blue-200 rounded-lg text-center p-8'>
                <h1>El ID de su compra es:</h1>
                <span className='font-bold p-5 text-center text-xl'>{orderId}</span>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="text-center p-8">
                <h1 className="font-bold">No hay productos en el carrito</h1>
                <h3>Por favor, vuelve a la página principal para continuar con tu compra</h3>
            </div>
        );
    }

    return (
        <div>
            <h1 className="pt-20 pl-20 font-semibold">Finalizar compra</h1>
            <p className="pl-20">*Te pedimos que completes la siguiente información para poder generarte una orden de compra y seguir el proceso de compra</p>
            <CheckOutForm onConfirm={createOrder} />
        </div>
    );
};

export default CheckOut;
