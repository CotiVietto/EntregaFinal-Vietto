import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore'; 
import { db } from '../firebase/firebaseConfig'; 

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const fetchProducts = async () => {
            try {
                const collectionRef = categoryId
                    ? query(collection(db, 'products'), where('category', '==', categoryId))
                    : collection(db, 'products'); 

                const querySnapshot = await getDocs(collectionRef);
                const productsAdapted = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsAdapted); 
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]); 

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
