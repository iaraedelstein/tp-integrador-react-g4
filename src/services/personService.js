import axios from 'axios';
const baseUrl = 'http://localhost:3000';

export const getPersonas = async () => {
  try {
    const respuesta = await axios.get(`${baseUrl}/persona`);
    return respuesta.data;
  } catch (error) {
    console.log('Error getting person');
    return [];
  }
};

export const createPersona = async (nombre, apellido, email, alias) => {
  try {
    const respuesta = await axios.post(`${baseUrl}/persona`, {
      nombre: nombre,
      apellido: apellido,
      email: email,
      alias: alias,
    });
    return respuesta.data;
  } catch (error) {
    console.log(`Error creating person ${nombre}`);
    return error;
  }
};
