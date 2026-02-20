import React from "react";
import Navbar_bar from "./Components/Navbar_bar";
import HeroSection from "./Components/HeroSection";
import Products_Section from "./Components/Products_Section";
import Nosotros from "./Components/Nosotros";
import EventsSection from "./Components/Eventos";
import Reservas from "./Components/Reserva";


function Home() {
  return (
    <>
      <header>
        <nav>
          <Navbar_bar />
        </nav>
      </header>
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <section id="nosotros">
          <Nosotros/>
        </section>
        <section id="eventos">
          <EventsSection/>
        </section>
        <section id="reservas">
          <Reservas/>
        </section>
        {/* <section>
          <Products_Section/>
        </section> */}
      </main>
    </>
  );
}

export default Home;
