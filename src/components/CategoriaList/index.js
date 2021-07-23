import React, { useState, useEffect } from 'react';
import { getCategories } from '../../services/categoryService';
//import { useDispatch, useSelector} from 'react-redux';

export default function ObtenerCategorias() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categories = getCategories();
    setCategories(categories);
  }, []);

  return (
    <div className="ejemplo">
      <h1>Aca deberian estar las categorias</h1>
      {categories.map((cat) => (
        <div classname="idCategoria" key={cat.id}>
          <p className="nombreCategoria">{cat.nombre}</p>
        </div>
      ))}
    </div>
  );
}
