import { useState, useEffect } from 'react';
import { createLibro } from '../../services/libroService';
import Button from 'react-bootstrap/Button';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

export default function LibroForm(props) {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [persona, setPersona] = useState('');
  const categorias = useSelector((state) => state.categorias);
  const personas = useSelector((state) => state.personas);

  useEffect(() => {}, []);

  const handleChangeNombre = (e) => {
    const newNombre = e.target.value;
    setNombre(newNombre);
  };

  const handleChangeDescription = (e) => {
    const newDescription = e.target.value;
    setDescripcion(newDescription);
  };

  const handleChangePersona = (e) => {
    const persona = e.target.value;
    console.log(persona);
    setPersona(persona);
  };

  const handleChangeCategoria = (e) => {
    const categoria = e.target.value;
    console.log(categoria);
    setCategoria(categoria);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const libro = {
        nombre: nombre,
        descripcion: descripcion,
        categoria_id: categoria,
        persona_id: persona,
      };
      const libroCreated = await createLibro(libro);
      dispatch({ type: 'ADD', list: 'LIBRO', detail: { libro: libroCreated } });
      props.history.push('/libro');
    } catch (e) {
      //todo informar al usuario
      console.log(`Error creating libro ${nombre}`);
    }
  };

  const handleCancel = () => {
    props.history.push('/libro');
  };

  return (
    <Container className="container-new">
      <Row>
        <Col>
          <h1 className="title">Nuevo Libro</h1>
        </Col>
      </Row>

      <Form className="container-new-form">
        <Form.Group className="input-form-group">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="nombre"
            value={nombre}
            onChange={handleChangeNombre}
          />
        </Form.Group>
        <Form.Group className="input-form-group">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            name="descripcion"
            placeholder="descripcion"
            value={descripcion}
            onChange={handleChangeDescription}
          />
        </Form.Group>
        <Form.Group className="input-form-group" controlId="formGridCategory">
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            defaultValue="Seleccionar..."
            onChange={handleChangeCategoria}
          >
            <option>Seleccionar...</option>
            {categorias.length > 0 &&
              categorias.map((cat) => {
                return <option value={cat.id}>{cat.nombre}</option>;
              })}
          </Form.Select>
        </Form.Group>
        <Form.Group className="input-form-group" controlId="formGridPerson">
          <Form.Label>Persona</Form.Label>
          <Form.Select
            defaultValue="Seleccionar..."
            onChange={handleChangePersona}
          >
            <option>Seleccionar...</option>
            {personas.length > 0 &&
              personas.map((persona) => {
                return <option value={persona.id}>{persona.nombre}</option>;
              })}
          </Form.Select>
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
