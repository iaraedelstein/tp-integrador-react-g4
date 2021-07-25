import React, { useState, useEffect } from 'react';
import { createPersona } from '../../services/personService';
//import { useDispatch, useSelector} from 'react-redux';

export default function PersonaForm() {
    const [persona, setPersona] = useState([]);

    const createPersona = async(nombre, apellido, email, alias) => {
        const persona = await createPersona(nombre, apellido, email, alias);
        setPersona(persona);
    };

    return <> </>;
}