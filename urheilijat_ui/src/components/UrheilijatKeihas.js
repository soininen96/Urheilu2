import React, { useContext, useEffect } from "react";
import Urheilijatieto from "./Urheilijatieto";
import urheilijatContext from "../contexts/UrheilijatContext";

//Tämä luokka sitä varten että voidaan avata keihaanheittäjät omalle sivulleen.
const UrheilijatKeihas = () => {
  const UrheilijatContext = useContext(urheilijatContext);
  console.log(UrheilijatContext);

  useEffect(() => {
    UrheilijatContext.getUrheilijatKeihas();
    console.log(UrheilijatContext);
  }, []);

  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Keihäänheittäjät</span>
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

export default UrheilijatKeihas;
