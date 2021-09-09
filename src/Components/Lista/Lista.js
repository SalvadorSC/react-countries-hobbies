import React from "react";
import Person from "../Person/Person";
import PropTypes from "prop-types";
import "./Lista.css";
const personas = [
  { name: "Roger", edad: 22, hobbies: ["manga", "web programming"] },
  { name: "Salva", edad: 20, hobbies: ["manga", "web programming"] },
  { name: "Emilio", edad: 29, hobbies: ["manga", "web programming"] },
];

const Lista = () => {
  const listaNombres = personas.map((persona) => (
    <li className="ficha-persona" key={persona.name}>
      <Person
        name={persona.name}
        edad={persona.edad}
        hobbies={persona.hobbies}
      />
    </li>
  ));
  return <ul className="lista-personas">{listaNombres}</ul>;
};

Lista.propTypes = {
  name: PropTypes.string,
  edad: PropTypes.number,
};

export default Lista;
