import React, { useContext, useEffect } from "react";
import Urheilijatieto from "./Urheilijatieto";
import urheilijatContext from "../contexts/UrheilijatContext";

//Tämä luokka sitä varten että voidaan avata f1 kuskit omalle sivulleen.
const UrheilijatF1 = () => {
  const UrheilijatContext = useContext(urheilijatContext);
  console.log(UrheilijatContext);

  useEffect(() => {
    UrheilijatContext.getUrheilijatF1();
    console.log(UrheilijatContext);
  }, []);

  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-danger">F1 Kuljettajat</span>
      </h1>
      <React.Fragment>
        {UrheilijatContext.urheilijat.length
          ? UrheilijatContext.urheilijat.map((urheilija) => (
              <Urheilijatieto key={urheilija.id} urheilija={urheilija} />
            ))
          : null}
      </React.Fragment>
    </>
  );
};

export default UrheilijatF1;
