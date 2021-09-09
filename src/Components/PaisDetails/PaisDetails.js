import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./PaisDetails.css";
import { useParams } from "react-router-dom";

const PaisDetails = () => {
  const { name } = useParams();
  const [country, setCountry] = useState();
  const getCountry = async () => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    const data = await response.json();
    setCountry(data[0]);
  };
  useEffect(() => {
    getCountry();
  }, []);
  return (
    <div className="person pais-card">
      {country && (
        <>
          <p>{country.name}</p>
          <img
            className="pais-flag-img"
            src={country.flag}
            alt={country.name}
          />
        </>
      )}
    </div>
  );
};

PaisDetails.propTypes = {
  name: PropTypes.string,
  edad: PropTypes.number,
};

export default PaisDetails;
