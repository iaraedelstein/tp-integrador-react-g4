import React, { useState, useEffect } from 'react';
import { getPersona } from '../../services/personService';
//import { useDispatch, useSelector} from 'react-redux';

export default function PersonaList() {
    const [personas, setPersonas] = useState([]);

    const fetchData = async() => {
        const personas = await getPersona();
        setPersonas(personas);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return ( 
        <div className = "personas" >
            <h1 className = "personas-title" > Personas </h1>  
                { personas.map((per) => {
                return ( 
                <div className = "personas-wrapper" key = { per.id } >
                    <p className = "personas-info" > { per.nombre } </p>  
                    <p className = "personas-info" > { per.apellido } </p>
                    <p className = "personas-info" > { per.email } </p>
                    <p className = "personas-info" > { per.alias } </p>
                </div >
            );
        })
    }   </div>
    );
}