import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      <ul className="lista-links">
        {pathname !== "/" && (
          <Link to="/">
            <li>Personas</li>
          </Link>
        )}
        {pathname !== "/paises" && (
          <Link to="/paises">
            <li>Paises</li>
          </Link>
        )}
      </ul>
    </header>
  );
};
export default Header;
