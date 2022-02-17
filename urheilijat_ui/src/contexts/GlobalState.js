import React, { useReducer } from "react";
import AppReducer from "./VanhaAppReducer";
import UrheilijatContext from "./UrheilijatContext";
import axios from "axios";

const GlobalState = (props) => {
  //initial state
  let initialState = {
    urheilijat: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  //kaikki urheilijat
  const getUrheilijat = async () => {
    try {
      let res = await axios.get("http://localhost:3005/urheilijat");
      let { data } = res;
      dispatch({ type: "GET_URHEILIJAT", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  //kaikki f1 kuskit
  const getUrheilijatF1 = async () => {
    try {
      let res = await axios.get("http://localhost:3005/urheilijat/f1");
      let { data } = res;
      dispatch({ type: "GET_URHEILIJATF1", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  //kaikki nhl pelaajat
  const getUrheilijatNhl = async () => {
    try {
      let res = await axios.get("http://localhost:3005/urheilijat/nhl");
      let { data } = res;
      dispatch({ type: "GET_URHEILIJATNHL", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  //kaikki keihäänheittäjät
  const getUrheilijatKeihas = async () => {
    try {
      let res = await axios.get("http://localhost:3005/urheilijat/keihas");
      let { data } = res;
      dispatch({ type: "GET_URHEILIJATKEIHAS", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  //kaikki urheilijat joilla lajina hakusana
  const getLajiUrheilijat = async (laji) => {
    try {
      let sql = "http://localhost:3005/lajiurheilijat/" + laji;
      let res = await axios.get(sql);
      let { data } = res;
      console.log("GET_LAJIURHEILIJAT:");
      dispatch({ type: "GET_LAJIURHEILIJAT", payload: data });
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  //yksittäinen urheilija id:n perusteella
  const getUrheilija = async (id) => {
    try {
      let sql = "http://localhost:3005/" + id;

      let res = await axios.get(sql);
      let { data } = res;
      console.log("GET_URHEILIJA:");
      dispatch({ type: "GET_URHEILIJA", payload: data });
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  //uusi urheilija
  const setUrheilijat = async (uusiUrheilija) => {
    try {
      const res = await axios
        .post(`http://localhost:3005/lisaa`, uusiUrheilija)
        .then((res) => {
          dispatch({ type: "ADD_URHEILIJA", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  //urheilijan päivitys
  const setUrheilija = async (id, paivitettyUrheilija) => {
    try {
      const res = await axios
        .put(`http://localhost:3005/urheilija/${id}`, paivitettyUrheilija)
        .then((res) => {
          dispatch({ type: "EDIT_URHEILIJA", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  //urheilijan poisto
  const poistaUrheilija = async (id) => {
    try {
      let sql = "http://localhost:3005/urheilija/" + id["id"];

      const res = await axios.delete(sql).then((res) => {
        dispatch({ type: "DELETE_URHEILIJA", payload: id["id"] });
        console.log(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UrheilijatContext.Provider
      value={{
        urheilijat: state.urheilijat,
        getUrheilijat,
        getUrheilijatF1,
        getUrheilijatNhl,
        getUrheilijatKeihas,
        getLajiUrheilijat,
        setUrheilija,
        setUrheilijat,
        poistaUrheilija,
        getUrheilija,
      }}
    >
      {props.children}
    </UrheilijatContext.Provider>
  );
};

export default GlobalState;
