import axios from 'axios';
const baseUrl = 'http://localhost:3000';

export const getPersona = async() => {
    try {
        const respuesta = await axios.get(`${baseUrl}/persona`);
        return respuesta.data;
    } catch (error) {
        console.log('Error getting person');
        return [];
    }
};

export const createPersona = async(nombre, apellido, email, alias) => {
    try {
        const respuesta = await axios.post(`${baseUrl}/persona`, {
            nombre: nombre,
            apellido: apellido,
            email: email,
            alias: alias
        });
        return respuesta.data;
    } catch (error) {
        console.log(`Error creating person ${nombre}`);
        return error;
    }
};
/*
export const deleteCategory = async(id) => {
    try {
        const respuesta = await axios.delete(`${baseUrl}/categoria/${id}`);
        return respuesta.data;
    } catch (error) {
        console.log(`Error deleting category ${id}`);
        return error;
    }
};

export const updateCategory = async(id, name) => {
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

export const getLibrosByCategory = async(id) => {
    try {
        const respuesta = await axios.get(`${baseUrl}/categoria/${id}/libros`);
        return respuesta.data;
    } catch (error) {
        console.log(`Error getting libros for category ${id}`);
        return error;
    }
};*/