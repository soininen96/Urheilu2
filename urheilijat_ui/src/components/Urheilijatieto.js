import React, { useState, useContext } from "react";
import urheilijatContext from "../contexts/UrheilijatContext";
import { Link, useNavigate } from "react-router-dom";

const Urheilijatieto = (props) => {
  const UrheilijatContext = useContext(urheilijatContext);

  let history = useNavigate();
  const [naytaUrheilijatieto, setnaytaUrheilijatieto] = useState(false);

  const onDeleteClick = (id) => {
    UrheilijatContext.poistaUrheilija(id);
    window.location.reload();
    history("/");
  };

  const onShowClick = (e) => {
    let lippu = !naytaUrheilijatieto;
    setnaytaUrheilijatieto(lippu);
  };

  const {
    id,
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    pituus,
    paino,
    kuva,
    laji,
    saavutukset,
  } = props.urheilija;

  return (
    <div className="card card-body mb-3 display:flex, justifyContent: flex-end">
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <h4>{etunimi + " " + sukunimi}</h4>
        <button className="button_left" onClick={onShowClick.bind(this)}>
          Kaikki tiedot
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          className="btn-group mr-2 text-right"
          role="group"
          aria-label="Second group"
        >
          <Link to={`/${id}`}>
            <button className="button_right">Muokkaa</button>
          </Link>
          <button
            className="button_right"
            onClick={onDeleteClick.bind(this, { id })}
          >
            Poista
          </button>
        </div>
      </div>
      {naytaUrheilijatieto ? (
        <ul className="list-group">
          <li className="list-group-item">Etunimi: {etunimi}</li>
          <li className="list-group-item">Sukunimi: {sukunimi}</li>
          <li className="list-group-item">Kutsumanimi: {kutsumanimi}</li>
          <li className="list-group-item">Syntymäpäivä: {syntymavuosi}</li>
          <li className="list-group-item">Pituus: {pituus}</li>
          <li className="list-group-item">Paino: {paino}</li>
          <li className="list-group-item">Laji: {laji}</li>
          <li className="list-group-item">Saavutukset: {saavutukset}</li>
          <li className="list-group-item">
            <img src={kuva} width="300" height="300" />
          </li>
          <a href={kuva} target="_blank">
            Katso alkuperäinen kuva
          </a>
        </ul>
      ) : null}
    </div>
  );
};

export default Urheilijatieto;
