import React from "react";
import PropTypes from "prop-types";
import "./PaisCard.css";
import { Link } from "react-router-dom";

const PaisCard = ({ name, flag }) => {
  return (
    <Link to={`/pais/${name}`}>
      <div className="person">
        <p>{name}</p>
        <img className="pais-flag-img" src={flag} alt={name} />
      </div>
    </Link>
  );
};

PaisCard.propTypes = {
  name: PropTypes.string,
  edad: PropTypes.number,
};

export default PaisCard;
