import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movements from "./components/Movements";

function App() {
  const [moveList, setMoveList] = useState({
    form: {
      concepto: "",
      monto: 0,
      tipo: "",
      fecha: "",
    },
    tipoModal: "insertar",
  });

  const [moveLists, setMoveLists] = useState([]);
  const [listUpdated, setListUpdated] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const getMoveLists = () => {
      fetch("http://localhost:9000/api")
        .then((res) => res.json())
        .then((res) => setMoveLists(res));
    };
    getMoveLists();
    setListUpdated(false);
  }, [listUpdated]);

  const addMovement = () => {
    setMoveList({
      form: {
        concepto: "",
        monto: 0,
        tipo: "",
        fecha: "",
      },
      tipoModal: "insertar",
    });
    setModalIsOpen(true);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home moveLists={moveLists} />} />
          <Route
            exact
            path="/movements"
            element={
              <Movements
                moveList={moveList}
                setMoveList={setMoveList}
                moveLists={moveLists}
                setListUpdated={setListUpdated}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                addMovement={addMovement}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
