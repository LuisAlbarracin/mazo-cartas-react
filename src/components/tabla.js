import React from "react";
import Table from "react-bootstrap/Table";
import './tabla.css';

class Tabla extends React.Component {

  traerDatos = () => {
    const datos = JSON.parse(localStorage.getItem('cartas'))

    localStorage.setItem("cartas", JSON.stringify(datos));

  }

  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Carta</th>
            <th>Cant</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    );
  }
}

export default Tabla;
