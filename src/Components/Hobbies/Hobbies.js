import React, { useState } from "react";
import AddHobbiesForm from "../AddHobbiesForm/AddHobbiesForm";

const Hobbies = ({ showHobbies, hobbies, handleHobbies }) => {
  const [editarHobbies, setEditarHobbies] = useState(false);

  return (
    <>
      {showHobbies && hobbies.map((hobbie) => <p>{hobbie}</p>)}
      {editarHobbies && <AddHobbiesForm handleHobbies={handleHobbies} />}
      <button
        className="button-info-persona"
        onClick={() => setEditarHobbies(!editarHobbies)}
      >
        {editarHobbies ? "Enviar" : "Añadir"} Hobbies
      </button>
    </>
  );
};

export default Hobbies;
