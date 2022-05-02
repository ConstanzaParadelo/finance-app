import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalMovimiento from "./ModalMovimiento";

const Movements = ({moveList, setMoveList, moveLists, setListUpdated, modalIsOpen, setModalIsOpen, addMovement }) => { 

    const getBalance = (moveLists) => {
        const balance = getIngresos(moveLists) - getEngresos(moveLists);
        return <h2 style={{textAlign: 'left'}}>Balance {balance}</h2>
        ;
    }

    const getIngresos = (moveLists) => {
        let totalIncome = 0;
        moveLists?.forEach(moveList => { 
            if(moveList.tipo === 'ingreso'){
                totalIncome += parseInt(moveList.monto)
            }
        });

        return totalIncome;
    }

    const getEngresos = (moveLists) => {
        let totalExpenses = 0;
        moveLists?.forEach(moveList => { 
            if(moveList.tipo === 'egreso'){
                totalExpenses += parseInt(moveList.monto)
            }
        });

        return totalExpenses;
    }

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res));

        setListUpdated(true);
    }

    const seleccionarLibro = (moveList) => {
    setMoveList({
        form: {
            id: moveList.id,
            concepto: moveList.concepto,
            monto: moveList.monto,
            tipo: moveList.tipo,
            fecha: moveList.fecha,
        },
        tipoModal: 'actualizar',
    });
    setModalIsOpen(true);
    };

    return (
        <div className="container"> 
            {getBalance(moveLists)}
            <button type='submit' variant="outline-dark" className='btn btn-dark'  onClick={() => addMovement()}>Insertar nuevo Movimiento</button>
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
                {moveLists?.map(moveList => (
                        <tr key={moveList.id}>
                          
                            <td>{moveList.concepto}</td>
                            <td>{moveList.monto}</td>
                            <td>{moveList.tipo}</td>
                            <td>{moveList.fecha}</td>
                            <td>
                                <button onClick={() => handleDelete(moveList.id)} className="btn btn-danger">Delete</button>{" "}
                                <button onClick={() => seleccionarLibro(moveList)} className="btn btn-success">Update</button>
                            </td>
                        </tr>
                ))}
            </tbody>
        </table>
        <ModalMovimiento modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} moveList={moveList} setMoveList={setMoveList} setListUpdated={setListUpdated}/>
        </div>
    )
}

export default Movements;

