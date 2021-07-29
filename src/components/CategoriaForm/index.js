import { useState, useEffect } from 'react';
import {
  createCategory,
  updateCategory,
  getCategory,
} from '../../services/categoryService';
import Button from 'react-bootstrap/Button';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function CategoriaForm(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    async function fetchData() {
      if (id !== undefined) {
        try {
          const category = await getCategory(id);
          setNombre(category.nombre);
        } catch (e) {
          //ERROR SHOW
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
        const catUpdated = await updateCategory(id, nombre);
        dispatch({
          type: 'UPDATE',
          list: 'CATEGORIA',
          detail: { categoria: catUpdated },
        });
      } else {
        const catNew = await createCategory(nombre);
        dispatch({
          type: 'ADD',
          list: 'CATEGORIA',
          detail: { categoria: catNew },
        });
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
