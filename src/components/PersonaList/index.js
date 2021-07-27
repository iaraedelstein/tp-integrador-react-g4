import React, { useState, useEffect } from 'react';
import { deletePersona, getPersonas } from '../../services/personService';
import { Link } from 'react-router-dom';
import './styles.css';

export default function PersonaList(props) {
  const [personas, setPersonas] = useState([]);

  const fetchData = async () => {
    try {
      const personas = await getPersonas();
      setPersonas(personas);
    } catch (e) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="personas container-fluid">
      <h1 className="personas-title"> Personas </h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Alias</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((person) => (
              <tr className="personas-wrapper" key={person.id}>
                <td className="personas-info">{person.id}</td>
                <td className="personas-info"> {person.nombre} </td>
                <td className="personas-info"> {person.apellido} </td>
                <td className="personas-info"> {person.email} </td>
                <td className="personas-info"> {person.alias} </td>
                <td>
                  <Link
                    class="link"
                    to={'/personas/:id/edit' + person.id.toString()}
                  >
                    Editar
                  </Link>
                  <Link onClick={() => deletePersona(person.id)}>Borrar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to={'/persona/new'}>Nueva Persona</Link>
    </div>
  );
}
