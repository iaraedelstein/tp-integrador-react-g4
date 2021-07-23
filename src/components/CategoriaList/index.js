import React, { useState, useEffect } from 'react';
import { getCategories } from '../../services/categoryService';
//import { useDispatch, useSelector} from 'react-redux';

export default function CategoriaList() {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="categories">
      <h1>Categorías</h1>
      {categories.map((cat) => {
        return (
          <div className="category-wrapper" key={cat.id}>
            <p className="category--name">{cat.nombre}</p>
          </div>
        );
      })}
    </div>
  );
}
