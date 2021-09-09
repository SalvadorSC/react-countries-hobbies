import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Person.css";
import Hobbies from "../Hobbies/Hobbies";

const Person = ({ name, edad, hobbies }) => {
  const [nombre, setNombre] = useState(name);
  const [age, setAge] = useState(edad);
  const [showHobbies, setShowHobbies] = useState(false);
  return (
    <div className="person">
      <h1>{nombre}</h1>
      <p>{`Mi edad: ${age} años`}</p>
      <Hobbies hobbies={hobbies} showHobbies={showHobbies} />
      <button
        className="button-info-persona"
        onClick={() => setShowHobbies(!showHobbies)}
      >
        {showHobbies ? "Ocultar" : "Mostrar"} Hobbies
      </button>
      <button
        className="button-info-persona"
        onClick={() => setNombre("Salva")}
      >
        Cambio de nombre
      </button>
      <button className="button-info-persona" onClick={() => setAge(age + 1)}>
        Cumplir años
      </button>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  edad: PropTypes.number,
};

export default Person;
