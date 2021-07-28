import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteCategory } from '../../services/categoryService';
import CategoriaLibros from '../CategoriaLibros';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';

export default function CategoriaList(props) {
  const dispatch = useDispatch();
  const categorias = useSelector((state) => state.categorias);
  const [category, setCategory] = useState('');

  const handleDeleteCategory = async (id) => {
    try {
      await deleteCategory(id);
      dispatch({ type: 'DELETE', list: 'CATEGORIA', detail: { id } });
    } catch (e) {
      console.log(`Error deleting category ${id}`);
      //TODO show error message
    }
  };

  return (
    <Container className="categories">
      <Row>
        <Col>
          <h1 className="title">Categorías</h1>
        </Col>
      </Row>
      <Row>
        <div className="btn-end">
          <Link to={'/categoria/new'} className="btn btn-secondary">
            Nueva Categoría
          </Link>
        </div>
      </Row>

      <div className="container-list__list">
        {categorias.map((cat) => {
          return (
            <div className="category-wrapper" key={cat.id}>
              <button
                className="category-info"
                onClick={() => setCategory(cat.id)}
              >
                {cat.nombre}
              </button>
              <div className="card-actions">
                <Link
                  className="link"
                  to={`/categoria/${cat.id.toString()}/edit`}
                >
                  <FaPencilAlt></FaPencilAlt>
                </Link>
                <button
                  className="card-actions__delete"
                  onClick={() => handleDeleteCategory(cat.id)}
                >
                  <FaTrash></FaTrash>
                </button>
              </div>
            </div>
          );
        })}
        {category && <CategoriaLibros id={category} />}
      </div>
    </Container>
  );
}
