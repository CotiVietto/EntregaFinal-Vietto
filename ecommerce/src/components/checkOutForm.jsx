import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
const CheckOutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const { clearCart } = useContext(CartContext); 

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone, 
            email
        };

        onConfirm(userData);

        clearCart();
    };

    return (
        <div className='Container pt-10 pl-20'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label form-control mr-2 p-2 w-full border border-gray-300 rounded font-semibold'>
                    Nombre :  
                    <input
                        className='Input'
                        type='text'
                        value={name}
                        onChange={({target}) => setName(target.value)}
                    />
                </label>

                <label className='Label form-control mr-2 p-2 w-full border border-gray-300 rounded font-semibold'>
                    Teléfono :
                    <input
                        className='Input'
                        type='text'
                        value={phone}
                        onChange={({target}) => setPhone(target.value)}
                    />
                </label>
                <label className='Label form-control mr-2 p-2 w-full border border-gray-300 rounded font-semibold'>
                    Email :
                    <input
                        className='Input'
                        type='email'
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                    />
                </label>
                <div className='Label pt-5 pb-10'>
                    <button type='submit' className='Button bg-blue-200 hover:bg-blue-400 text-blue-800 font-bold py-2 px-3 rounded inline-block text-m'>Crear orden</button>
                </div>
            </form>
        </div>
    );
};

export default CheckOutForm;
