import React, { useState, useEffect } from 'react';
import { createCategory } from '../../services/categoryService';
//import { useDispatch, useSelector} from 'react-redux';

export default function CategoriaForm(props) {
  const [nombre, setNombre] = useState([]);

  const handleChangeNombre = (name) => {
    setNombre(name);
  };

  const createCategory = async (name) => {
    await createCategory(name);
    props.history.push('/categoria');
  };

  return (
    <div>
      <label>nombre</label>
      <input
        type="text"
        name="nombre"
        placeholder="nombre"
        value={nombre}
        onChange={(e) => handleChangeNombre(e.target.value)}
      />
      <button type="submit" onClick={createCategory()}>
        Guardar
      </button>
    </div>
  );
}
