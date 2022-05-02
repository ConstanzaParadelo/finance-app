import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({ moveLists }) => {
  const getBalance = (moveLists) => {
    const balance = getIngresos(moveLists) - getEngresos(moveLists);
    return (
      <div>
        <div className="container-fluid">
          <h2 style={{ textAlign: "left", margin: "0.5em" }}>
            Balance {balance}
          </h2>
        </div>
      </div>
    );
  };

  const getIngresos = (moveLists) => {
    let totalIncome = 0;
    moveLists?.forEach((moveList) => {
      if (moveList.tipo === "ingreso") {
        totalIncome += parseInt(moveList.monto);
        console.log(moveList);
      }
    });

    return totalIncome;
  };

  const getEngresos = (moveLists) => {
    let totalExpenses = 0;
    moveLists?.forEach((moveList) => {
      if (moveList.tipo === "egreso") {
        totalExpenses += parseInt(moveList.monto);
      }
    });

    return totalExpenses;
  };

  return (
    <div className="container">
      {getBalance(moveLists)}
      <table className="table">
        <thead>
          <tr>
            
            <th>Concepto</th>
            <th>Monto</th>
            <th>Tipo</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {moveLists?.slice(0, 10).map((moveList) => (
            <tr key={moveList.id}>
              <td>{moveList.concepto}</td>
              <td>{moveList.monto}</td>
              <td>{moveList.tipo}</td>
              <td>{moveList.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
