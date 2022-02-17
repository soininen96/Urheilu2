import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import urheilijatContext from "../contexts/UrheilijatContext";

const MuokkaaUrheilija = () => {
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
  const { id } = useParams();

  let history = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const urheilija = UrheilijatContext.getUrheilija(id).then((res) => {
        setEtunimi(res.etunimi);
        setSukunimi(res.sukunimi);
        setKutsumanimi(res.kutsumanimi);
        setSyntymavuosi(res.syntymavuosi);
        setPituus(res.pituus);
        setPaino(res.paino);
        setKuva(res.kuva);
        setLaji(res.laji);
        setSaavutukset(res.saavutukset);
      });
    } else mounted = false;
  }, []);

  const handleSubmit = async (e) => {
    const paivitettyUrheilija = {
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

    UrheilijatContext.setUrheilija(id, paivitettyUrheilija);
    history("/");
  };
  const onChangeEtunimi = (e) => {
    setEtunimi(e.target.value);
  };
  const onChangeSukunimi = (e) => {
    setSukunimi(e.target.value);
  };
  const onChangeKutsumanimi = (e) => {
    setKutsumanimi(e.target.value);
  };
  const onChangeSyntymavuosi = (e) => {
    setSyntymavuosi(e.target.value);
  };
  const onChangePituus = (e) => {
    setPituus(e.target.value);
  };
  const onChangePaino = (e) => {
    setPaino(e.target.value);
  };
  const onChangeKuva = (e) => {
    setKuva(e.target.value);
  };
  const onChangeLaji = (e) => {
    setLaji(e.target.value);
  };
  const onChangeSaavutukset = (e) => {
    setSaavutukset(e.target.value);
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Muokkaa {etunimi + " " + sukunimi} </div>

      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="etunimi">Etunimi</label>
            <input
              type="text"
              name="etunimi"
              className="form-control form-control-lg"
              placeholder="Syötä etunimi..."
              value={etunimi}
              onChange={onChangeEtunimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sukunimi">Sukunimi</label>
            <input
              type="text"
              name="sukunimi"
              className="form-control form-control-lg"
              placeholder="Syötä sukunimi..."
              value={sukunimi}
              onChange={onChangeSukunimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="kutsumanimi">Kutsumanimi</label>
            <input
              type="text"
              name="kutsumanimi"
              className="form-control form-control-lg"
              placeholder="Syötä kutsumanimi..."
              value={kutsumanimi}
              onChange={onChangeKutsumanimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="syntymavuosi">Syntymävuosi</label>
            <input
              type="Date"
              name="syntymavuosi"
              className="form-control form-control-lg"
              placeholder="Syötä syntymavuosi..."
              value={syntymavuosi}
              onChange={onChangeSyntymavuosi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pituus">Pituus</label>
            <input
              type="text"
              name="pituus"
              className="form-control form-control-lg"
              placeholder="Syötä pituus..."
              value={pituus}
              onChange={onChangePituus}
            />
          </div>
          <div className="form-group">
            <label htmlFor="paino">Paino</label>
            <input
              type="text"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={onChangePaino}
            />
          </div>
          <div className="form-group">
            <label htmlFor="kuva">Kuva</label>
            <input
              type="text"
              name="kuva"
              className="form-control form-control-lg"
              placeholder="Syötä kuva..."
              value={kuva}
              onChange={onChangeKuva}
            />
          </div>
          <div className="form-group">
            <label htmlFor="laji">Laji</label>
            <input
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={onChangeLaji}
            />
          </div>
          <div className="form-group">
            <label htmlFor="saavutukset">Saavutukset</label>
            <input
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={onChangeSaavutukset}
            />
          </div>
          <input
            type="submit"
            value="Muokkaa urheilija"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
};
export default MuokkaaUrheilija;
