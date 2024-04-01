import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'; 
import CheckOutForm from './checkOutForm';
import { collection, Timestamp, getFirestore, addDoc } from 'firebase/firestore';

const CheckOut = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, clearCart, getTotal } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        console.log (name, phone, email)

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

            addDoc (orderCollection, objOrder) .then (({id }) => setOrderId (id))

            
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
        return <h1 className='my-8 mx-auto max-w-xl bg-blue-200 rounded-lg text-center p-8'>El id de su compra es: 
        <span className='font-bold p-5 text-center text-xl'>{orderId}</span>
        </h1>;
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
