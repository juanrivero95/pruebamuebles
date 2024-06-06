import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const products = [
  { id: 1, name: 'Producto 1', price: '$10.00', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Producto 2', price: '$20.00', image: 'https://via.placeholder.com/150' },
  // Agrega más productos según sea necesario
];

const CheckoutPage = () => {
  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <Grid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
};

export default CheckoutPage;
