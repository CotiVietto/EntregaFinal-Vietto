import React, { useState, useEffect } from 'react';
import Item from './Item';
import { getProductsByCategory } from '../asynMock';

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]); 

  const fetchProducts = (category) => {
    getProductsByCategory(category)
      .then(products => {
        setProducts(products);
      })
      .catch(error => {
        console.error('Error al obtener productos por categoría:', error);
      });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleFilterChange = (filter) => {
    setSelectedCategory(filter);
    if (filter === 'all') {
        fetchProducts('all'); 
    } else {
        fetchProductsByFilter(filter); 
    }
};

const fetchProductsByFilter = (filter) => {
    getProducts()
        .then(products => {
            const filteredProducts = products.filter(prod => prod.filter === filter);
            setProducts(filteredProducts);
        })
        .catch(error => {
            console.error('Error al obtener productos por filtro:', error);
        });
};

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4 pt-11">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded" onClick={() => handleFilterChange('all')}>Todos los protectores</button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded" onClick={() => handleCategoryChange('Protector Solar Facial')}>Protectores solares faciales</button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded" onClick={() => handleCategoryChange('Protector Solar Corporal')}>Protectores solares corporales</button>
      </div>
      <div>
        {products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
            stock={product.stock}
            category={product.category}
            filter={product.filter}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;


