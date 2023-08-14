import axios from 'axios';

const usersUrl = 'http://localhost:5000/';

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}add/`, user);
}

export const getUsers = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${usersUrl}${id}`);
    } catch (error) {
        console.log('Error while calling getUsers api ', error);
    }
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}delete/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}update/${id}`, user)
}