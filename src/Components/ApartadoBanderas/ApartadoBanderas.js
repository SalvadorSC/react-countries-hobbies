import React, { useState } from "react";
import Paises from "../Paises/Paises";
import "./ApartadoBanderas.css";
const ApartadoBanderas = () => {
  const [showListaPaises, setShowListaPaises] = useState(true);

  return (
    <div>
      <div className="bloque-banderas">
        <h1 className="titulo-content-principal">Lista de paises</h1>
        <button
          className="button-show-banderas"
          onClick={() => setShowListaPaises(!showListaPaises)}
        >
          {showListaPaises ? "Ocultar Paises" : "Mostrar Paises"}
        </button>
      </div>
      {showListaPaises && <Paises />}
    </div>
  );
};

export default ApartadoBanderas;
