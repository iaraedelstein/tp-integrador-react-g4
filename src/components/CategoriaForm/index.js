import React, { useState } from 'react';
import { createCategory } from '../../services/categoryService';
import Button from 'react-bootstrap/Button';
import { Col, Container, Form, Row } from 'react-bootstrap';

export default function CategoriaForm(props) {
  const [nombre, setNombre] = useState([]);

  const handleChangeNombre = (e) => {
    const newNombre = e.target.value;
    setNombre(newNombre);
  };

  const handleSubmit = async (event) => {
    //TODO revisar que es async
    createCategory(nombre);
    props.history.push('/categoria');
  };

  return (
    <Container className="categories">
      <Row>
        <Col>
          <h1 className="title">Nueva Categoría</h1>
        </Col>
      </Row>

      <Form>
        <Row className="align-items-end">
          <Col xs="auto">
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                placeholder="nombre"
                value={nombre}
                onChange={handleChangeNombre}
              />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Button type="submit" onClick={handleSubmit}>
              Guardar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
