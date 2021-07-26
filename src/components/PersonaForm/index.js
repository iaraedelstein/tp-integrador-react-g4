import React, { useState, useEffect } from 'react';
import { createPersona } from '../../services/personService';
//import { useDispatch, useSelector} from 'react-redux';

export default function PersonaForm() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [alias, setAlias] = useState('');

  const createPersona = async () => {
    await createPersona(nombre, apellido, email, alias);
  };

  return <> </>;
}
