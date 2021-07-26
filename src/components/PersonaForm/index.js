import React, { useState, useEffect } from 'react';
import { createPersona } from '../../services/personService';
import './index.css';
//import { useDispatch, useSelector} from 'react-redux';

export default function PersonaForm(props) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [alias, setAlias] = useState('');

  const handleChangeNombre = (e) => {
    const newNombre = e.target.value;
    setNombre(newNombre);
  };

  const handleChangeApellido = (e) => {
    const newApellido = e.target.value;
    setApellido(newApellido);
  };

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleChangeAlias = (e) => {
    const newAlias = e.target.value;
    setAlias(newAlias);
  };

  const createPerson = async () => {
    await createPersona(nombre, apellido, email, alias);
    props.history.push('/persona');
  };

  return (
    <div class="container-fluid">
      <div class="form">
        <div class="header">
          <h1>Agregar persona</h1>
        </div>
        <div class="input-cont1">
          <input
            type="text"
            name="nombre"
            placeholder="nombre"
            value={nombre}
            onChange={handleChangeNombre}
          />
          <input
            type="text"
            name="apellido"
            placeholder="apellido"
            value={apellido}
            onChange={handleChangeApellido}
          />
        </div>
        <div class="input-cont2">
          <input
            type="text"
            name="alias"
            placeholder="alias"
            value={alias}
            onChange={handleChangeAlias}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <button onClick={createPerson}>Guardar</button>
      </div>
    </div>
  );
}
