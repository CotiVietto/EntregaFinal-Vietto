import React, { useState, useEffect } from 'react';
import Item from './Item';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    if (selectedCategory === 'all') {
      fetchAllProducts();
    } else {
      fetchProductsByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchAllProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
    } catch (error) {
      console.error('Error al obtener todos los productos:', error);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      let categoryQuery;
      if (category === 'Protector Solar Facial') {
        categoryQuery = 1;
      } else if (category === 'Protector Solar Corporal') {
        categoryQuery = 2;
      }

      const q = query(collection(db, 'products'), where('category', '==', categoryQuery));
      const querySnapshot = await getDocs(q);
      const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
    } catch (error) {
      console.error('Error al obtener productos por categoría:', error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div>
        <img src='../src/assets/portada/portada.png' alt="Portada" className="w-full"/>
      </div>
      <div className="flex justify-center space-x-4 mb-4 pt-11">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded" onClick={() => handleCategoryChange('all')}>Todos los protectores</button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded" onClick={() => handleCategoryChange('Protector Solar Facial')}>Protectores solares faciales</button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded" onClick={() => handleCategoryChange('Protector Solar Corporal')}>Protectores solares corporales</button>
      </div>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
            category={product.category}
            filter={product.filter}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

