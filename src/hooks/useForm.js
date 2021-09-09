import { useEffect, useState } from "react";
const useForm = (handleHobbies, validateForm) => {
  const initValues = {
    name: "",
  };
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState();

  const handleChange = (event) => {
    const value = event.target.value;
    setValues({
      ...values,
      name: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //validar
    setErrors(validateForm(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      handleHobbies(values.name);
    }
  }, [errors]);

  return {
    handleSubmit,
    handleChange,
    errors,
    values,
  };
};

export default useForm;
