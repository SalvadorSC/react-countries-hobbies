import React, { useState } from "react";
import Lista from "../Lista/Lista";
import "./ApartadoEmpleados.css";

const ApartadoEmpleados = () => {
  const [showListaEmpleados, setShowListaEmpleados] = useState(true);
  return (
    <div>
      <div className="bloque-empleados">
        <h1 className="titulo-content-principal">Lista de empleados</h1>
        <button
          className="button-show-empleados"
          onClick={() => setShowListaEmpleados(!showListaEmpleados)}
        >
          {showListaEmpleados ? "Ocultar Empleados" : "Mostrar Empleados"}
        </button>
      </div>
      {showListaEmpleados && <Lista />}
    </div>
  );
};

export default ApartadoEmpleados;
