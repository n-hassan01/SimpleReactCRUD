import axios from 'axios';
import getCookie from './getCookies';

const usersUrl = 'http://localhost:5000/users/';

export const addUser = async (user) => {
    const cookie = getCookie('jwt-token-cookie');
    
    return await axios.post(`${usersUrl}add/`, user, {
        headers: {
            Authorization: `Bearer ${cookie}`
        }
    });
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
    const cookie = getCookie('jwt-token-cookie');
    
    try {
        return await axios.delete(`${usersUrl}delete/${id}`, {
            headers: {
                Authorization: `Bearer ${cookie}`
            }
        });
    } catch (err) {
        return "Forbidden to delete users";
    }
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}update/${id}`, user)
}

export const login = async (user) => {
    return await axios.post(`${usersUrl}login/`, user)
}

export const signup = async (user) => {
    return await axios.post('http://localhost:4000/signup/', user)
}