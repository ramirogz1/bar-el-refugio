import "../Css/Reserva.css";

export default function Reservas() {
  const handleWhatsApp = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const fecha = e.target.fecha.value;
    const hora = e.target.hora.value;
    const personas = e.target.personas.value;
    const mensaje = `Hola! Quisiera reservar una mesa.
    Nombre: ${nombre}
    Fecha: ${fecha}
    Hora: ${hora}
    Personas: ${personas}`;

    const url = `https://api.whatsapp.com/send?phone=5491123456789&text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="reservas">
      <div className="reservas-container">
        <div className="reservas-info">
          <h2>Reservá tu Mesa</h2>

          <p>
            Te esperamos con las mejores bebidas, comidas y música. Completá tus
            datos y asegurá tu lugar para disfrutar de una noche única.
          </p>
        </div>

        <form className="reservas-form" onSubmit={handleWhatsApp}>
          <label>Nombre</label>
          <input type="text" name="nombre" placeholder="Tu nombre" required />

          <label>Fecha</label>
          <input type="date" name="fecha" required />

          <label>Hora</label>
          <input type="time" name="hora" required />

          <label>Cantidad de personas</label>
          <input type="number" name="personas" min="1" required />

          <button type="submit" className="btn-reservar">
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
