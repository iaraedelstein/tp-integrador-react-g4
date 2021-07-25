import React, { useState, useEffect } from 'react';
import { getLibrosByCategory } from '../../services/categoryService';
//import { useDispatch, useSelector} from 'react-redux';

export default function CategoriaLibros() {
  const [categories, setCategories] = useState([]);

  const fetchData = async (id) => {
    const categories = await getLibrosByCategory(id);
    setCategories(categories);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <></>;
}
