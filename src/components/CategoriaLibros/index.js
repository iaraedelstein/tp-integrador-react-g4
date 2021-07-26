import React, { useState, useEffect } from 'react';
import { getLibrosByCategory } from '../../services/categoryService';
//import { useDispatch, useSelector} from 'react-redux';

export default function CategoriaLibros(props) {
  const [libros, setLibros] = useState([]);

  const fetchData = async () => {
    const libros = await getLibrosByCategory(3);
    console.log(libros);
    setLibros(libros);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid books">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Persona</th>
          </tr>
        </thead>
        <tbody>
          {libros.map((libro) => (
            <tr className="libro-wrapper" key={libro.id}>
              <td className="libro-info"> {libro.nombre} </td>
              <td className="libro-info"> {libro.description} </td>
              <td className="libro-info"> {libro.persona_id} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
