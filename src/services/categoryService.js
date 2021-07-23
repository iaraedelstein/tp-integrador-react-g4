import axios from 'axios';
const baseUrl = 'http://localhost:3000';

export const getCategories = async () => {
  try {
    const respuesta = await axios.get(baseUrl + '/categoria');
    console.log(respuesta.data);
    return respuesta.data;
  } catch (error) {
    console.log('Error');
    return [];
  }
};
