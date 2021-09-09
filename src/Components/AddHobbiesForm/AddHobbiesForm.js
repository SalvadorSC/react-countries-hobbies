import React from "react";
import useForm from "../../hooks/useForm";
import { validateForm } from "../../utils/validateForm";

const AddHobbiesForm = ({ handleHobbies }) => {
  const { handleSubmit, handleChange, errors, values } = useForm(
    handleHobbies,
    validateForm
  );

  return (
    <form onSubmit={handleSubmit}>
      <h3>Añadir Hobbies</h3>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        id="hobbies"
        placeholder="Escribe el nuevo Hobby"
      />
      {errors.name && <p>Error</p>}
      <button onClick={handleSubmit}>Añadir</button>
    </form>
  );
};

export default AddHobbiesForm;
