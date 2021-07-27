import axios from 'axios';
const baseUrl = 'http://localhost:3000';

export const getLibros = async () => {
  try {
    const respuesta = await axios.get(`${baseUrl}/libro`);
    return respuesta.data;
  } catch (error) {
    console.log('Error getting libros');
    return [];
  }
};

export const getLibro = async (id) => {
  const respuesta = await axios.get(`${baseUrl}/libro/${id}`);
  return respuesta.data;
};

export const createLibro = async (libro) => {
  const respuesta = await axios.post(`${baseUrl}/libro`, libro);
  return respuesta.data;
};

export const deleteLibro = async (id) => {
  const respuesta = await axios.delete(`${baseUrl}/libro/${id}`);
  return respuesta.data;
};

export const prestarLibro = async (id) => {
  const respuesta = await axios.delete(`${baseUrl}/libro/prestar/${id}`);
  return respuesta.data;
};

export const devolverLibro = async (id) => {
  const respuesta = await axios.delete(`${baseUrl}/libro/devolver/${id}`);
  return respuesta.data;
};
