import React, { useState, useEffect } from 'react';
import { Alert, Container, Row, Table } from 'react-bootstrap';
import { getLibrosByCategory } from '../../services/categoryService';
import './styles.css';

export default function CategoriaLibros({ id }) {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const libros = await getLibrosByCategory(id);
      setLibros(libros);
    };
    fetchData();
  }, [id]);

  return (
    <Container className="books">
      <Row>
        {libros.length > 0 ? (
          <Table variant="dark" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Persona</th>
              </tr>
            </thead>
            <tbody>
              {libros.map((libro) => (
                <tr className="libro-wrapper" key={libro.id}>
                  <td className="libro-info"> {libro.id} </td>
                  <td className="libro-info"> {libro.nombre} </td>
                  <td className="libro-info"> {libro.descripcion} </td>
                  <td className="libro-info"> {libro.persona_id} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Alert variant="danger">No se encontraron resultados</Alert>
        )}
      </Row>
    </Container>
  );
}
