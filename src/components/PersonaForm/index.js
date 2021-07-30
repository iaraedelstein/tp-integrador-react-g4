import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { createPersona } from '../../services/personService';
import { useDispatch } from 'react-redux';

export default function PersonaForm(props) {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [alias, setAlias] = useState('');
  const [error, setError] = useState('');

  const handleChangeNombre = (e) => {
    const newNombre = e.target.value;
    setNombre(newNombre);
  };

  const handleChangeApellido = (e) => {
    const newApellido = e.target.value;
    setApellido(newApellido);
  };

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleChangeAlias = (e) => {
    const newAlias = e.target.value;
    setAlias(newAlias);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const persona = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        alias: alias,
      };
      const personaCreated = await createPersona(persona);
      dispatch({
        type: 'ADD',
        list: 'PERSONA',
        detail: { persona: personaCreated },
      });
      props.history.push('/persona');
    } catch (e) {
      setError(e.response.data.mensaje || 'Error');
    }
  };

  const handleCancel = () => {
    props.history.push('/persona');
  };

  return (
    <Container className="container-new">
      <Row>
        <Col>
          <h1 className="title">Nueva Persona</h1>
        </Col>
      </Row>
      {error && (
        <Alert variant="danger" onClose={() => setError('')} dismissible>
          {error}
        </Alert>
      )}
      <Form className="container-new-form">
        <Form.Group className="input-form-group">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="nombre"
            value={nombre}
            required
            onChange={handleChangeNombre}
          />
        </Form.Group>
        <Form.Group className="input-form-group">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="apellido"
            placeholder="apellido"
            value={apellido}
            required
            onChange={handleChangeApellido}
          />
        </Form.Group>

        <Form.Group className="input-form-group">
          <Form.Label>Alias</Form.Label>
          <Form.Control
            type="text"
            name="alias"
            placeholder="alias"
            value={alias}
            required
            onChange={handleChangeAlias}
          />
        </Form.Group>
        <Form.Group className="input-form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email"
            value={email}
            required
            onChange={handleChangeEmail}
          />
        </Form.Group>

        <div className="btn-form-actions">
          <Button type="submit" onClick={handleSubmit}>
            Guardar
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
        </div>
      </Form>
    </Container>
  );
}
