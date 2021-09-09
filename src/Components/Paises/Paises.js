import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PaisCard from "../PaisCard/PaisCard";
import "./Paises.css";

const Paises = () => {
  const [euCountries, setEuCountries] = useState([]);

  const getCountries = async () => {
    const response = await fetch(
      "https://restcountries.eu/rest/v2/region/europe"
    );
    const data = await response.json();
    setEuCountries(data);
  };
  useEffect(() => {
    getCountries();
  }, []);
  const listaPaises = euCountries.map((pais) => (
    <li className="ficha-pais" key={pais.name}>
      <PaisCard name={pais.name} flag={pais.flag} />
    </li>
  ));
  return (
    <>
      <ul className="lista-paises">{listaPaises}</ul>
    </>
  );
};

Paises.propTypes = {
  name: PropTypes.string,
  edad: PropTypes.number,
};

export default Paises;
