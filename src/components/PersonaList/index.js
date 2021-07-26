import React, { useState, useEffect } from 'react';
import { getPersonas } from '../../services/personService';
//import { useDispatch, useSelector} from 'react-redux';

export default function PersonaList() {
  const [personas, setPersonas] = useState([]);

  const fetchData = async () => {
    const personas = await getPersonas();
    setPersonas(personas);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="personas">
      <h1 className="personas-title"> Personas </h1>
      {personas.map((person) => {
        return (
          <div className="personas-wrapper" key={person.id}>
            <p className="personas-info"> {person.nombre} </p>
            <p className="personas-info"> {person.apellido} </p>
            <p className="personas-info"> {person.email} </p>
            <p className="personas-info"> {person.alias} </p>
          </div>
        );
      })}
    </div>
  );
}
