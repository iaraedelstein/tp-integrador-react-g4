import React, { useState, useEffect } from 'react';
import { createCategory } from '../../services/categoryService';
//import { useDispatch, useSelector} from 'react-redux';

export default function CategoriaForm() {
  const [categories, setCategories] = useState([]);

  const createCategory = async (name) => {
    const categories = await createCategory(name);
    setCategories(categories);
  };

  return <></>;
}
