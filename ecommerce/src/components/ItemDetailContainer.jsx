import React, { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig'; 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'products', itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productAdapted = { id: response.id, ...data };
                setProduct(productAdapted);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    return ( 
        <div className='ItemDetailContainer'>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemDetail {...product} />
            )}
        </div>
    );
}
 
export default ItemDetailContainer;