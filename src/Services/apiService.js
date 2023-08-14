import axios from 'axios';

const usersUrl = 'http://localhost:5000/';

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}add/`, user);
}