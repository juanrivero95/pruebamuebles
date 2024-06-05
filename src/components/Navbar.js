// src/components/Navbar.js
import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  // Determina si la pantalla es lo suficientemente ancha como para mostrar la versión de escritorio
  const isDesktop = window.innerWidth >= 768;

  return (
    <div>
      {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
    </div>
  );
};

export default Navbar;
