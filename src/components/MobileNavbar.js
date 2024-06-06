import React, { useState } from 'react';
import '../styles/MobileNavbar.css'; // Importa el archivo CSS desde la carpeta styles

const MobileNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    alert(`Buscando: ${query}`);
    // Aquí puedes agregar la lógica para manejar la búsqueda
  };

  return (
    <div className="navbarmob">
      <div className="top-rowmob">
        <div className="menu-iconmob" onClick={() => setIsNavOpen(!isNavOpen)}>
          &#9776;
        </div>
        <div className="brandmob">
          <a href="/">Madera</a>
        </div>
        <div className="search-iconmob" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <i className="fas fa-search"></i>
            </div>
            <a href="/login" className="login-iconmob"><i className="fas fa-user"></i></a>
          <a href="/cart" className="cart-iconmob"><i className="fas fa-shopping-cart"></i></a>


      </div>
      {isSearchOpen && (
        <form className="search-formmob" onSubmit={handleSearch}>
          <input type="text" name="search" placeholder="Buscar..." />
          <button type="submit">Buscar</button>
        </form>
      )}
      <nav className={isNavOpen ? 'nav-open' : ''}>
        <ul className="menu">
          <li><a href="/" className="menu-buttonmob">Inicio</a></li>
          <li className="dropdownmob">
            <a href="/product" className="menu-buttonmob">Productos &#9662;</a>
            <div className="dropdown-contentmob">
              <a href="/">Categoría 1</a>
              <a href="/">Categoría 2</a>
              <a href="/">Categoría 3</a>
            </div>
          </li>
          <li><a href="/contacto" className="menu-buttonmob">Contactanos</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavbar;