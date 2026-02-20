import React from 'react'
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import '../Components_Generales/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1: Logo / Descripción */}
        <div className="footer-col">
          <h3 className="footer-logo">El Refugio</h3>
          <p>
            Un rincón donde las noches se llenan de música, sabores y momentos inolvidables.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer-col">
          <h4>Explorar</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#eventos">Eventos</a></li>
            <li><a href="#productos">Carta</a></li>
            <li><a href="#reservas">Reservas</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <p>📍 Av. Principal 123, Buenos Aires</p>
          <p>🕒 Lun a Dom · 19:00 a 03:00 hs</p>
          <p>📞 +54 9 11 2345-6789</p>

          <div className="social-icons">
            <a href="#" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} El Refugio · Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer