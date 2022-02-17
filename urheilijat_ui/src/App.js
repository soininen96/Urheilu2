import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Urheilijatiedot from "./components/Urheilijatiedot";
import UrheilijatF1 from "./components/UrheilijatF1";
import UrheilijatNhl from "./components/UrheilijatNhl";
import UrheilijatKeihas from "./components/UrheilijatKeihas";
import Ylatunniste from "./components/Ylatunniste";
import Tietoa from "./components/pages/Tietoa";
import LisaaUrheilija from "./components/LisaaUrheilija";
import MuokkaaUrheilija from "./components/MuokkaaUrheilija";

import GlobalState from "./contexts/VanhaGlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="App">
          <Ylatunniste turvataso="keskisuuri" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Urheilijatiedot />} />
              <Route path="/urheilija/lisaa" element={<LisaaUrheilija />} />
              <Route path="/:id" element={<MuokkaaUrheilija />} />
              <Route path="/urheilijatf1" element={<UrheilijatF1 />} />
              <Route path="/urheilijatNhl" element={<UrheilijatNhl />} />
              <Route path="/urheilijatKeihas" element={<UrheilijatKeihas />} />
              <Route path="/tietoa" element={<Tietoa />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
