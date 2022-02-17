import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import urheilijatContext from "../contexts/UrheilijatContext";

export default function LisaaUrheilija() {
  let history = useNavigate();
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [pituus, setPituus] = useState("");
  const [paino, setPaino] = useState("");
  const [kuva, setKuva] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const UrheilijatContext = useContext(urheilijatContext);

  const handleSubmit = async (e) => {
    const uusiUrheilija = {
      etunimi: etunimi,
      sukunimi: sukunimi,
      kutsumanimi: kutsumanimi,
      syntymavuosi: syntymavuosi,
      pituus: pituus,
      paino: paino,
      kuva: kuva,
      laji: laji,
      saavutukset: saavutukset,
    };
    console.log("Tarkistetaan uusiUrheilija -objekti:");
    console.log(uusiUrheilija);

    UrheilijatContext.setUrheilijat(uusiUrheilija);
    history("/");
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Lisää urheilija</div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="etunimi">Etunimi</label>
            <input
              id="etunimi"
              type="text"
              name="etunimi"
              className="form-control form-control-lg"
              placeholder="Syötä etunimi..."
              value={etunimi}
              onChange={(event) => setEtunimi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä etunimi</div>
          </div>
          <div className="form-group">
            <label htmlFor="sukunimi">Sukunimi</label>
            <input
              id="sukunimi"
              type="text"
              name="sukunimi"
              className="form-control form-control-lg"
              placeholder="Syötä sukunimi..."
              value={sukunimi}
              onChange={(event) => setSukunimi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä sukunimi</div>
          </div>
          <div className="form-group">
            <label htmlFor="kutsumanimi">Kutsumanimi</label>
            <input
              id="kutsumanimi"
              type="text"
              name="kutsumanimi"
              className="form-control form-control-lg"
              placeholder="Syötä kutsumanimi..."
              value={kutsumanimi}
              onChange={(event) => setKutsumanimi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä kutsumanimi</div>
          </div>
          <div className="form-group">
            <label htmlFor="syntymavuosi">Syntymävuosi</label>
            <input
              id="syntymavuosi"
              type="date"
              name="syntymavuosi"
              className="form-control form-control-lg"
              placeholder="Syötä syntymavuosi..."
              value={syntymavuosi}
              onChange={(event) => setSyntymavuosi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä syntymavuosi</div>
          </div>
          <div className="form-group">
            <label htmlFor="pituus">Pituus</label>
            <input
              id="pituus"
              type="text"
              name="pituus"
              className="form-control form-control-lg"
              placeholder="Syötä pituus..."
              value={pituus}
              onChange={(event) => setPituus(event.target.value)}
            />
            <div className="invalid-feedback">Täytä pituus</div>
          </div>
          <div className="form-group">
            <label htmlFor="paino">Paino</label>
            <input
              id="paino"
              type="text"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={(event) => setPaino(event.target.value)}
            />
            <div className="invalid-feedback">Täytä paino</div>
          </div>
          <div className="form-group">
            <label htmlFor="kuva">Kuva</label>
            <input
              id="kuva"
              type="text"
              name="kuva"
              className="form-control form-control-lg"
              placeholder="Syötä kuva..."
              value={kuva}
              onChange={(event) => setKuva(event.target.value)}
            />
            <div className="invalid-feedback">Täytä kuva</div>
          </div>
          <div className="form-group">
            <label htmlFor="laji">Laji</label>
            <input
              id="laji"
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={(event) => setLaji(event.target.value)}
            />
            <div className="invalid-feedback">Täytä laji</div>
          </div>
          <div className="form-group">
            <label htmlFor="saavutukset">Saavutukset</label>
            <input
              id="saavutukset"
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={(event) => setSaavutukset(event.target.value)}
            />
            <div className="invalid-feedback">Täytä saavutukset</div>
          </div>
          <input
            type="submit"
            value="Lisää urheilija"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
}
