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

export const createPersona = async (persona) => {
  try {
    const respuesta = await axios.post(`${baseUrl}/persona`, persona);
    return respuesta.data;
  } catch (error) {
    console.log(`Error creating person ${persona.nombre}`);
    return error;
  }
};

export const deletePersona = async (id) => {
  try {
    const respuesta = await axios.delete(`${baseUrl}/persona/${id}`);
    return respuesta.data;
  } catch (error) {
    console.log(`Error deleting persona ${id}`);
    return error;
  }
};
