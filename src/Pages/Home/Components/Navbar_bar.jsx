import React, { useState } from 'react';
import "../Css/Navbar_bar.css"
import { useNavigate } from 'react-router-dom';
// import Carta from '../../Carta/Carta';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const handleNavigation = (path) => {
    navigate(path);     // Cambia de página
    setIsOpen(false);    // Cierra el menú móvil
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo a la izquierda */}
        <div className="nav-logo">
          <a href="/">EL REFUGIO</a>
        </div>

        {/* Icono de menú para móviles */}
        <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Enlaces de navegación */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a></li>
          <li><a href="#nosotros" onClick={() => setIsOpen(false)}>Nosotros</a></li>
          <li><a href="#eventos" onClick={() => setIsOpen(false)}>Eventos</a></li>
          {/* <li><a href="#carta" onClick={() => setIsOpen(false)}>Carta</a></li> */}
          <li>
            <button 
              className="nav-link-btn" 
              onClick={() => handleNavigation('/menu')}
            >
              Carta
            </button>
          </li>
          
          <li><a href="#reservas" className="btn-reserve" onClick={() => setIsOpen(false)}>Reservar</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;