import "../Carta/Css/Carta.css";
import bife from '../../assets/bife.jpg'
import ravioles from '../../assets/ravioles.jpg'
import burger from '../../assets/burger.jpg'
import coctel from '../../assets/coctel.jpg'
import gin from '../../assets/gin.jpeg'
import cheesecake from '../../assets/cheesecake.jpg'

export default function Carta() {
  const menues = [
    {
      nombre: "Bife al Malbec",
      descripcion: "Corte tierno de lomo con reducción de vino Malbec y papas rústicas.",
      imagen: bife,
      precio: "$7.500",
    },
    {
      nombre: "Ravioles Caseros",
      descripcion: "Rellenos de ricotta y espinaca, bañados en salsa de tomates frescos.",
      imagen: ravioles,
      precio: "$6.200",
    },
    {
      nombre: "Hamburguesa Gourmet",
      descripcion: "Doble carne, cheddar, panceta crocante y pan artesanal.",
      imagen: burger,
      precio: "$6.800",
    },
    {
      nombre: "Cóctel Old Fashioned",
      descripcion: "Whisky, azúcar, angostura y piel de naranja. Clásico e intenso.",
      imagen: coctel,
      precio: "$4.200",
    },
    {
      nombre: "Gin Tonic Frutal",
      descripcion: "Gin premium, tónica, frutos rojos y rodaja de lima.",
      imagen: gin,
      precio: "$4.000",
    },
    {
      nombre: "Postre de la Casa",
      descripcion: "Cheesecake con frutos del bosque y base crocante de galleta.",
      imagen: cheesecake,
      precio: "$3.800",
    },
  ];

  return (
    <section className="menu" id="productos">
      <h2 className="menu-title">Nuestra Carta</h2>
      <p className="menu-subtitle">
        Sabores únicos preparados con pasión y los mejores ingredientes.
      </p>

      <div className="menu-grid">
        {menues.map((item, i) => (
          <div key={i} className="menu-card">
            <div className="menu-img">
              <img src={item.imagen} alt={item.nombre} />
            </div>
            <div className="menu-info">
              <h3>{item.nombre}</h3>
              <p>{item.descripcion}</p>
              <span className="menu-precio">{item.precio}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

