import { useState, useEffect } from 'react';
import { createLibro } from '../../services/libroService';
import { getCategories } from '../../services/categoryService';
import { getPersonas } from '../../services/personService';
import Button from 'react-bootstrap/Button';
import { Col, Container, Form, Row } from 'react-bootstrap';

export default function LibroForm(props) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [categorias, setCategorias] = useState('');
  const [persona, setPersona] = useState('');
  const [personas, setPersonas] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const categList = await getCategories();
      setCategorias(categList);
      const personasList = await getPersonas();
      setPersonas(personasList);
    };
    fetchData();
  }, []);

  const handleChangeNombre = (e) => {
    const newNombre = e.target.value;
    setNombre(newNombre);
  };

  const handleChangeDescription = (e) => {
    const newDescription = e.target.value;
    setDescripcion(newDescription);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const libro = {
        nombre: nombre,
        descripcion: descripcion,
        categoria_id: categoria,
        persona_id: persona,
      };
      await createLibro(libro);
      props.history.push('/libro');
    } catch (e) {
      console.log(`Error creating libro ${nombre}`);
    }
  };

  return (
    <Container className="categories">
      <Row>
        <Col>
          <h1 className="title">Nuevo Libro</h1>
        </Col>
      </Row>

      <Form>
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
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            name="descripcion"
            placeholder="descripcion"
            value={nombre}
            onChange={handleChangeDescription}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCategory">
          <Form.Label>Categoria</Form.Label>
          <Form.Select defaultValue="Seleccionar...">
            <option>Seleccionar...</option>
            {categorias.length > 0 &&
              categorias.map((cat) => {
                return <option>{cat.nombre}</option>;
              })}
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPerson">
          <Form.Label>Persona</Form.Label>
          <Form.Select defaultValue="Seleccionar...">
            <option>Seleccionar...</option>
            {personas.length > 0 &&
              personas.map((persona) => {
                return <option>{persona.nombre}</option>;
              })}
          </Form.Select>
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Guardar
        </Button>
      </Form>
    </Container>
  );
}
