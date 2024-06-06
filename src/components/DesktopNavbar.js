// src/components/DesktopNavbar.js
import React from 'react';
import '../styles/DesktopNavbar.css'; // Importa el archivo CSS desde la carpeta styles

const DesktopNavbar = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    alert(`Buscando: ${query}`);
    // Aquí puedes agregar la lógica para manejar la búsqueda
  };

  return (
    <div className="navbardesk">
      <div className="branddesk">
        <a href="/">Madera</a>
      </div>
      <form className="search-formdesk" onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </form>
      <nav>
        <ul className="menu">
          <li><a href="/" className="menu-buttondesk">Inicio</a></li>
          <li className="dropdowndesk">
            <a href="/product" className="menu-buttondesk">
              Productos <span>&#9662;</span>
            </a>
            <div className="dropdown-contentdesk">
              <a href="/">Categoría 1</a>
              <a href="/">Categoría 2</a>
              <a href="/">Categoría 3</a>
            </div>
          </li>
          <li><a href="/contacto" className="menu-buttondesk">Contactanos</a></li>
          <li><a href="/cart" className="menu-buttondesk"><i className="fas fa-shopping-cart"></i></a></li>
          <li><a href="/login" className="login-buttondesk">Iniciar sesión</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
