import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getCategories, deleteCategory } from '../../services/categoryService';
import CategoriaLibros from '../CategoriaLibros';
import './styles.css';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
//import { useDispatch, useSelector} from 'react-redux';

export default function CategoriaList(props) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  const fetchData = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };

  const handleDeleteCategory = async (id) => {
    try {
      await deleteCategory(id);
      fetchData();
    } catch (e) {
      console.log(`Error deleting category ${id}`);
      //TODO show error message
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

      <div className="categories-list">
        {categories.map((cat) => {
          return (
            <div className="category-wrapper" key={cat.id}>
              <button
                className="category-info"
                onClick={() => setCategory(cat.id)}
              >
                {cat.nombre}
              </button>
              <div className="category-actions">
                <Link
                  className="link"
                  to={`/categoria/${cat.id.toString()}/edit`}
                >
                  <FaPencilAlt></FaPencilAlt>
                </Link>
                <button
                  className="category-actions__delete"
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
