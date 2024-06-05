import React from 'react';

const CartPage = () => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        <li>Producto 1 - Precio: $XX.XX</li>
        <li>Producto 2 - Precio: $XX.XX</li>
        <li>Producto 3 - Precio: $XX.XX</li>
      </ul>
      <p>Total: $XXX.XX</p>
      <button>Finalizar Compra</button>
    </div>
  );
};

export default CartPage;
