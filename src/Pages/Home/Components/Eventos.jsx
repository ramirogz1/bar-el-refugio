import React from "react";
import "../Css/Eventos.css";
import imagen_1 from '../../../assets/jazz_and_coctel.jpg'
import imagen_2 from '../../../assets/vasos_pintas.jpg'
import imagen_3 from '../../../assets/retro_80.jpg'

export default function EventsSection() {
  const eventos = [
    {
      titulo: "Noche de Jazz & Cócteles",
      fecha: "Viernes 13 Dic · 21:00 hs",
      descripcion:
        "Disfrutá de una velada elegante con música en vivo y nuestra selección de cócteles premium.",
      imagen: imagen_1,
    },
    {
      titulo: "Happy Hour de Cerveza",
      fecha: "Todos los Jueves · 19:00 a 21:00 hs",
      descripcion:
        "2x1 en cervezas tiradas nacionales e importadas. Ideal para venir con amigos.",
      imagen: imagen_2,
    },
    {
      titulo: "Fiesta Retro 80’s",
      fecha: "Sábado 21 Dic · 23:00 hs",
      descripcion:
        "Reviví los mejores hits de los 80 con luces, DJ en vivo y tragos temáticos.",
      imagen: imagen_3,
    },
  ];

  return (
    <section className="events">
      <h2 className="events-title">Próximos Eventos</h2>
      <div className="events-grid">
        {eventos.map((e, i) => (
          <div key={i} className="event-card">
            <img src={e.imagen} alt={e.titulo} />
            <div className="event-info">
              <h3>{e.titulo}</h3>
              <p className="event-date">{e.fecha}</p>
              <p className="event-desc">{e.descripcion}</p>
              <button className="btn-reserva">Reservar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
