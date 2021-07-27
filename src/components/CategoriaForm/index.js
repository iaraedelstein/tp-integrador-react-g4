import { useState, useEffect } from 'react';
import {
  createCategory,
  updateCategory,
  getCategory,
} from '../../services/categoryService';
import Button from 'react-bootstrap/Button';
import { Col, Container, Form, Row } from 'react-bootstrap';

export default function CategoriaForm(props) {
  const id = props.match.params.id;
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    async function fetchData() {
      if (id !== undefined) {
        try {
          console.log(id);
          const category = await getCategory(id);
          console.log(category);
          setNombre(category.nombre);
        } catch (e) {
          console.log(`Error getting category ${id}`);
        }
      }
    }
    fetchData();
  }, [id]);

  const handleChangeNombre = (e) => {
    const newNombre = e.target.value;
    setNombre(newNombre);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (id !== undefined) {
        await updateCategory(id, nombre);
      } else {
        await createCategory(nombre);
      }

      props.history.push('/categoria');
    } catch (e) {
      console.log(`Error updating category ${nombre}`);
    }
  };

  return (
    <Container className="categories">
      <Row>
        <Col>
          <h1 className="title">
            {id !== undefined ? 'Editar Categoría' : 'Nueva Categoría'}
          </h1>
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
