import React from 'react'
import '../Css/Nosotros.css'

function Nosotros() {
  return (
    <>
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="https://estaticos-cdn.prensaiberica.es/clip/3e08855a-518e-4b80-b291-a7a6f47677c1_16-9-discover-aspect-ratio_default_0.webp" alt="Equipo del bar" />
        </div>

        <div className="about-text">
          <h2>Sobre Nosotros</h2>
          <p>
            En <strong>Bar El Refugio</strong> creemos que una buena bebida y una
            buena compañía son la receta perfecta para una noche inolvidable.
            Nuestro equipo combina pasión, hospitalidad y creatividad para
            ofrecerte experiencias únicas, desde cócteles artesanales hasta
            música en vivo en un ambiente cálido y moderno.
          </p>
          <p>
            Cada detalle está pensado para que te sientas como en casa — ya sea
            que vengas por un trago después del trabajo, una cita especial o una
            noche con amigos.
          </p>
          <button className="btn-about">Conocé más</button>
        </div>
      </div>
    </section>

    
    </>
  )
}

export default Nosotros