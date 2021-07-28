import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteLibro } from '../../services/libroService';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

export default function LibroList(props) {
  const dispatch = useDispatch();

  const [librosComplete, setLibrosComplete] = useState([]);
  const libros = useSelector((state) => state.libros);
  const categorias = useSelector((state) => state.categorias);
  const personas = useSelector((state) => state.personas);

  const [libroEdit, setLibroEdit] = useState();

  const handleDeleteLibro = async (id) => {
    try {
      await deleteLibro(id);
      dispatch({ type: 'DELETE', list: 'LIBRO', detail: { id } });
    } catch (e) {
      console.log(`Error deleting libro ${id}`);
      //TODO show error message
    }
  };

  useEffect(() => {
    setLibrosComplete(
      libros.map((l) => {
        const categoria = categorias.find((c) => c.id === l.categoria_id);
        const persona = personas.find((p) => p.id === l.persona_id);
        const libro = {
          id: l.id,
          nombre: l.nombre,
          descripcion: l.descripcion,
          categoria,
          persona,
        };
        return libro;
      })
    );
  }, [libros, categorias, personas]);

  return (
    <Container className="container-list">
      <Row>
        <Col>
          <h1 className="title">Libros</h1>
        </Col>
      </Row>
      <Row>
        <div className="btn-end">
          <Link to={'/libro/new'} className="btn btn-secondary">
            Nuevo Libro
          </Link>
        </div>
      </Row>
      <div className="container-list__list">
        {librosComplete.map((libro) => {
          return (
            <Card
              bg={'light'}
              key={libro.id}
              style={{ width: '18rem' }}
              className="mb-2 card-wrapper"
            >
              <Card.Header>#{libro.id}</Card.Header>
              <Card.Body>
                <Card.Title>{libro.nombre}</Card.Title>
                <Card.Text>{libro.descripcion.toLowerCase()}</Card.Text>
                <Card.Text>{libro.categoria.nombre}</Card.Text>
                <Card.Text>
                  {libro.persona
                    ? `${libro.persona.nombre} ${libro.persona.apellido}`
                    : ''}
                </Card.Text>
                <div className="card-actions">
                  <Link
                    className="link"
                    to={`/libro/${libro.id.toString()}/edit`}
                  >
                    <FaPencilAlt></FaPencilAlt>
                  </Link>
                  <button
                    className="card-actions__delete"
                    onClick={() => handleDeleteLibro(libro.id)}
                  >
                    <FaTrash></FaTrash>
                  </button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}
