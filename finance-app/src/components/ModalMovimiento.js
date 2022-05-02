import React from "react";
import { Modal, ModalBody, ModalFooter, FormGroup, Input } from "reactstrap";


const ModalMovimiento = ({
  modalIsOpen,
  setModalIsOpen,
  moveList,
  setMoveList,
  setListUpdated,
}) => {
  const handleChange = async (e) => {
    e.persist();
    await setMoveList({
      form: {
        ...moveList.form,
        [e.target.name]: e.target.value,
      },
      tipoModal: moveList.tipoModal,
    });
  };

  const resetMoveListState = () => {
    setMoveList({
      form: {
        concepto: "",
        monto: 0,
        tipo: "",
        fecha: "",
      },
      tipoModal: "insertar",
    })
  };

  const handleSubmit = () => {
    let { concepto, monto, tipo, fecha } = moveList.form;

    // validacion de datos
    monto = parseInt(monto, 10);
    if (concepto === "" || tipo === "" || monto <= 0 || fecha === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    // consulta
    const requestInit = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(moveList.form),
    };
    fetch("http://localhost:9000/api", requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    //reiniciando state del libro
    resetMoveListState();

    setListUpdated(true);
    setModalIsOpen(false);
  };

  const handleUpdate = (id) => {

    const requestInit = {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(moveList.form),
    };
    fetch("http://localhost:9000/api/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    //reiniciando state del movimiento
    resetMoveListState();

    setListUpdated(true);
    setModalIsOpen(false);
  };

  return (
    <Modal isOpen={modalIsOpen}>
      <div>
      <ModalBody>
        <div className="mb-3">
          <label htmlFor="concepto" className="form-label">
            Concepto
          </label>
          <input
            value={moveList.form.concepto ? moveList.form.concepto : ""}
            name="concepto"
            onChange={handleChange}
            type="text"
            id="concepto"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="monto" className="form-label">
            Monto
          </label>
          <input
            value={moveList.form.monto ? moveList.form.monto : ""}
            name="monto"
            onChange={handleChange}
            type="number"
            id="monto"
            className="form-control"
          />
        </div>


        <div className="mb-3">
          <label htmlFor="tipo" className="form-label">
            Tipo
          </label> 
          <FormGroup>
            <Input
            id="tipo"
            name="tipo"
            type="select"
            value={moveList.form.tipo ? moveList.form.tipo : "ingreso"}
            onChange={handleChange}
            >
            <option>ingreso</option>
            <option>egreso</option>          
            </Input>

          </FormGroup>
  
         
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">
            Fecha
          </label>
          <input
            value={moveList.form.fecha}
            name="fecha"
            onChange={handleChange}
            type="text"
            id="fecha"
            className="form-control"
          />
        </div>
      </ModalBody>
      <ModalFooter>
        {moveList.tipoModal === "insertar" ? (
          <button className="btn btn-success" onClick={() => handleSubmit()}>
            Insertar
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => handleUpdate(moveList.form.id)}
          >
            Actualizar
          </button>
        )}
        <div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => setModalIsOpen(false)}
          >
            Cerrar
          </button>
        </div>
      </ModalFooter>
      </div>
    </Modal>
  );
};

export default ModalMovimiento;
