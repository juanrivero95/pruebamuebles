import React from 'react';

const CheckoutPage = () => {
  return (
    <div>
      <h2>Finalizar Compra</h2>
      <form>
        <label>Nombre:</label>
        <input type="text" />
        <label>Dirección:</label>
        <input type="text" />
        <label>Tarjeta de Crédito:</label>
        <input type="text" />
        <button>Realizar Pago</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
