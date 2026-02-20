import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Carta from "../Pages/Carta/Carta";
import Footer from "../Pages/Components_Generales/Footer";
import Navbar_bar from "../Pages/Home/Components/Navbar_bar";


export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/menu" element={<Carta />} />
      </Routes>
     <Footer/>
    </HashRouter>
  );
};
