import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <label>Email:</label>
        <input type="email" />
        <label>Contraseña:</label>
        <input type="password" />
        <button>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;
