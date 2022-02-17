import React, { useContext, useEffect } from "react";
import Urheilijatieto from "./Urheilijatieto";
import urheilijatContext from "../contexts/UrheilijatContext";

const Urheilijatiedot = () => {
  const UrheilijatContext = useContext(urheilijatContext);
  console.log(UrheilijatContext);

  useEffect(() => {
    UrheilijatContext.getUrheilijat();
    console.log(UrheilijatContext);
  }, []);

  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Kaikki urheilijat</span>
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

export default Urheilijatiedot;
