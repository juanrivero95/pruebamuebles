import React from 'react';

const RegisterPage = () => {
  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form>
        <label>Nombre:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Contraseña:</label>
        <input type="password" />
        <button>Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterPage;
