import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

const products = [
  { id: 1, name: 'Producto 1', price: '$10.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 1' },
  { id: 2, name: 'Producto 2', price: '$20.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 2' },
  { id: 3, name: 'Producto 3', price: '$30.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 3' },
  { id: 4, name: 'Producto 4', price: '$10.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 4' },
  { id: 5, name: 'Producto 5', price: '$20.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 5' },
  { id: 6, name: 'Producto 6', price: '$50.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 6' },
  { id: 7, name: 'Producto 7', price: '$120.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 7' },
  { id: 8, name: 'Producto 8', price: '$220.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 8' },
  { id: 9, name: 'Producto 9', price: '$24.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 9' },
  { id: 10, name: 'Producto 10', price: '$25.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 10' },
  { id: 11, name: 'Producto 11', price: '$20.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 11' },
  { id: 12, name: 'Producto 12', price: '$10.50', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 12' },
  { id: 13, name: 'Producto 13', price: '$22.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 13' },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
