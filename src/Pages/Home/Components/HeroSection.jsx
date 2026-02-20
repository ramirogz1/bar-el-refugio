import React from 'react'
import "../Css/HeroSection.css";
import { useNavigate } from 'react-router-dom';


export default function HeroSection() {

    const navigate = useNavigate();

   const navegar_carta = ()=> {
     navigate ('/menu')


   }

   const irAReservas = () => {
    const seccion = document.querySelector("#reservas");
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  };



  
  return (
    <section className="hero" id='inicio'>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Bar Nocturno El Refugio</h1>
        <p className="hero-subtitle">
          Donde la buena música y las mejores bebidas se encuentran
        </p>
        <div className="hero-buttons">
           {/* ✅ Lleva a la sección de reservas en la misma página */}
          <button className="btn primary" onClick={irAReservas}>
            Reservar Mesa
          </button>
           {/* ✅ Navega a la ruta /menu */}
          <button className="btn secondary" onClick={navegar_carta}>
            Ver Carta
          </button>
        </div>
      </div>
    </section>
  );
}

