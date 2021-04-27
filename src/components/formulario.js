import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './formulario.css';

class Formulario extends React.Component {

  guardar = e => {
    e.preventDefault();
    
  }

  render() {
    return (
      <Form className='Formulario' >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Número</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Carta</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.guardar}>
          Guardar
        </Button>
      </Form>
    );
  }
}

export default Formulario;
