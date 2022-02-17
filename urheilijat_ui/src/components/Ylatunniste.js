import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Ylatunniste = (props) => {
  const { turvataso } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Kaikki urheilijat
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/urheilijatf1" className="nav-link">
                F1 kuljettajat
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/urheilijatNHL" className="nav-link">
                NHL pelaajat
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/urheilijatKeihas" className="nav-link">
                Keihäänheittäjät
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/urheilija/lisaa" className="nav-link">
                Lisää urheilija
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tietoa" className="nav-link">
                Tietoa sivusta
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Ylatunniste.defaultProps = {
  turvataso: "pieni",
};

Ylatunniste.propTypes = {
  turvataso: PropTypes.string.isRequired,
};

export default Ylatunniste;
