import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getLibros, deleteLibro } from '../../services/libroService';
import './styles.css';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
//import { useDispatch, useSelector} from 'react-redux';

export default function LibroList(props) {
  const [libros, setLibros] = useState([]);
  const [libroEdit, setLibroEdit] = useState();

  const fetchData = async () => {
    const libros = await getLibros();
    setLibros(libros);
  };

  const handleDeleteLibro = async (id) => {
    try {
      await deleteLibro(id);
      fetchData();
    } catch (e) {
      console.log(`Error deleting libro ${id}`);
      //TODO show error message
    }
  };

  const handleEdit = async (libro) => {};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="libros">
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

      <div className="libros-list">
        {libros.map((libro) => {
          return (
            <Card
              bg={'light'}
              key={libro.id}
              text={'white'}
              style={{ width: '18rem' }}
              className="mb-2 libro-wrapper"
            >
              <Card.Header>#{libro.id}</Card.Header>
              <Card.Body>
                <Card.Title>{libro.nombre}</Card.Title>
                <Card.Text>{libro.descripcion.toLowerCase()}</Card.Text>
                <Card.Text> Categoría: {libro.categoria_id}</Card.Text>
                <Card.Text> Persona: {libro.persona_id}</Card.Text>
                <div className="libro-actions">
                  <Link
                    className="link"
                    to={`/libro/${libro.id.toString()}/edit`}
                  >
                    <FaPencilAlt></FaPencilAlt>
                  </Link>
                  <button
                    className="libro-actions__delete"
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
