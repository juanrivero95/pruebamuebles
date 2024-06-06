import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/producto/${product.id}`} className="card">
      <img className="image" src={product.image} alt={product.name} />
      <h2 className="product-name">{product.name}</h2>
      <p className="price">{product.price}</p>
    </Link>
  );
};

export default ProductCard;
