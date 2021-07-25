import axios from 'axios';
const baseUrl = 'http://localhost:3000';

export const getCategories = async () => {
  try {
    const respuesta = await axios.get(`${baseUrl}/categoria`);
    return respuesta.data;
  } catch (error) {
    console.log('Error getting categories');
    return [];
  }
};

export const createCategory = async (name) => {
  try {
    const respuesta = await axios.post(`${baseUrl}/categoria`, {
      nombre: name,
    });
    return respuesta.data;
  } catch (error) {
    console.log(`Error creating category ${name}`);
    return error;
  }
};

export const deleteCategory = async (id) => {
  try {
    const respuesta = await axios.delete(`${baseUrl}/categoria/${id}`);
    return respuesta.data;
  } catch (error) {
    console.log(`Error deleting category ${id}`);
    return error;
  }
};

export const updateCategory = async (id, name) => {
  try {
    const respuesta = await axios.put(`${baseUrl}/categoria/${id}`, {
      nombre: name,
    });
    return respuesta.data;
  } catch (error) {
    console.log(`Error updating category ${id}`);
    return error;
  }
};

export const getLibrosByCategory = async (id) => {
  try {
    const respuesta = await axios.get(`${baseUrl}/categoria/${id}/libros`);
    return respuesta.data;
  } catch (error) {
    console.log(`Error getting libros for category ${id}`);
    return error;
  }
};
