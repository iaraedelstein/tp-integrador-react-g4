import React, { useState, useEffect } from 'react';
import { createCategory } from '../../services/categoryService';
import Button from 'react-bootstrap/Button';
//import { useDispatch, useSelector} from 'react-redux';

export default function CategoriaForm(props) {
  const [nombre, setNombre] = useState([]);

  const handleChangeNombre = (e) => {
    const newNombre = e.target.value;
    setNombre(newNombre);
  };

  const save = async () => {
    await createCategory(nombre);
    props.history.push('/categoria');
  };

  return (
    <div className="container-fluid categories">
      <label>nombre</label>
      <input
        type="text"
        name="nombre"
        placeholder="nombre"
        value={nombre}
        onChange={handleChangeNombre}
      />
      <Button type="submit" onClick={save}>
        Guardar
      </Button>
    </div>
  );
}
