import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  deleteLibro,
  devolverLibro,
  prestarLibro,
} from '../../services/libroService';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

export default function LibroList(props) {
  const dispatch = useDispatch();

  const [librosComplete, setLibrosComplete] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [libro, setLibro] = useState();
  const [personaId, setPersonaId] = useState();
  const libros = useSelector((state) => state.libros);
  const categorias = useSelector((state) => state.categorias);
  const personas = useSelector((state) => state.personas);

  const handleDeleteLibro = async (id) => {
    try {
      await deleteLibro(id);
      dispatch({ type: 'DELETE', list: 'LIBRO', detail: { id } });
    } catch (e) {
      console.log(`Error deleting libro ${id}`);
      //TODO show error message
    }
  };

  const handleDevolverLibro = async (id) => {
    try {
      await devolverLibro(id);
      dispatch({ type: 'RETURN', list: 'LIBRO', detail: { id } });
    } catch (e) {
      console.log(`Error devolviendo libro ${id}`);
      //TODO show error message
    }
  };

  const handleChangePersona = (e) => {
    const persona = e.target.value;
    setPersonaId(persona);
  };

  const handlePrestarLibro = async (e) => {
    e.preventDefault();
    try {
      await prestarLibro(libro.id, personaId);
      dispatch({
        type: 'ASSIGN',
        list: 'LIBRO',
        detail: { id: libro.id, persona_id: personaId },
      });
      setShowModal(false);
      setLibro();
    } catch (e) {
      console.log(`Error prestando libro libro ${libro.id}`);
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

  useEffect(() => {
    if (libro) {
      setShowModal(true);
    }
  }, [libro]);

  return (
    <>
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
                style={{ width: '17rem', height: '19rem' }}
                className="mb-2 card-wrapper"
              >
                <Card.Header>#{libro.id}</Card.Header>
                <Card.Body className="card-body-containter">
                  <div>
                    <Card.Title>{libro.nombre}</Card.Title>
                    <Card.Text>{libro.descripcion.toLowerCase()}</Card.Text>
                    <Card.Text>Categoría {libro.categoria.nombre}</Card.Text>
                    <Card.Text>
                      {libro.persona
                        ? `Prestado a ${libro.persona.nombre} ${libro.persona.apellido}`
                        : 'Disponible'}
                    </Card.Text>
                  </div>
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
                    {libro.persona ? (
                      <button onClick={() => handleDevolverLibro(libro.id)}>
                        Devolver
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setLibro(libro);
                        }}
                      >
                        Prestar
                      </button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>

      {showModal && libro && (
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Prestar: {libro.nombre}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Seleccionar la persona que solicita el libro.</p>
            {
              <Form className="container-new-form">
                <Form.Group
                  className="input-form-group"
                  controlId="formGridPerson"
                >
                  <Form.Label>Persona</Form.Label>
                  <Form.Select
                    defaultValue="Seleccionar..."
                    onChange={handleChangePersona}
                  >
                    <option>Seleccionar...</option>
                    {personas.length > 0 &&
                      personas.map((persona) => {
                        return (
                          <option
                            value={persona.id}
                          >{`${persona.nombre} ${persona.apellido} (${persona.email})`}</option>
                        );
                      })}
                  </Form.Select>
                </Form.Group>
                <div className="btn-form-actions">
                  <Button type="submit" onClick={handlePrestarLibro}>
                    Guardar
                  </Button>
                  <Button variant="secondary">Cancelar</Button>
                </div>
              </Form>
            }
          </Modal.Body>
        </Modal.Dialog>
      )}
    </>
  );
}
