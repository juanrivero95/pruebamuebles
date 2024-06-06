import React from 'react';
import '../styles/ProductList.css';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Producto 1', price: '$10.00', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Producto 2', price: '$20.00', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Producto 3', price: '$30.00', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Producto 4', price: '$10.00', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Producto 5', price: '$20.00', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Producto 6', price: '$50.00', image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Producto 7', price: '$120.00', image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Producto 8', price: '$220.00', image: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Producto 9', price: '$24.00', image: 'https://via.placeholder.com/150' },
  { id: 10, name: 'Producto 10', price: '$25.00', image: 'https://via.placeholder.com/150' },
  { id: 11, name: 'Producto 11', price: '$20.00', image: 'https://via.placeholder.com/150' },
  { id: 12, name: 'Producto 12', price: '$10.50', image: 'https://via.placeholder.com/150' },
  { id: 13, name: 'Producto 13', price: '$22.00', image: 'https://via.placeholder.com/150' },
  // Agrega más productos según sea necesario
];

const ProductPage = () => {
  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div className="grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
