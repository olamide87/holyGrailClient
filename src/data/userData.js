import axios from 'axios';

const url = 'http://localhost:8088';

const getUserbyID = (id) => axios.get(`${url}/users/${id}`);

const authUser = (usernamePassword) => axios.post(`${url}/login`, usernamePassword);

const addUser = (userobj) => axios.post(`${url}/register`, userobj);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUserbyID, authUser, addUser,
};
