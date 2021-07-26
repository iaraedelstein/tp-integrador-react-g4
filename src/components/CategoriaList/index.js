import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../services/categoryService';
import CategoriaLibros from '../CategoriaLibros';
//import { useDispatch, useSelector} from 'react-redux';

export default function CategoriaList(props) {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid categories">
      <h1 className="categories-title">Categorías</h1>
      <div>
        <Link to={'/categoria/new'}>Nueva Categoría</Link>
        {categories.map((cat) => {
          return (
            <div className="category-wrapper" key={cat.id}>
              <p className="category-info">{cat.id}</p>
              <p className="category-info">{cat.nombre}</p>
            </div>
          );
        })}
        {/* <CategoriaLibros id="1" /> */}
      </div>
    </div>
  );
}
