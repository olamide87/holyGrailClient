import axios from 'axios';

const url = 'http://localhost:8088';

const headers = () => ({
  headers: {
    Authorization: `Token ${localStorage.getItem('token')}`,
  },
});

const getClosetByUid = (uid) => axios.get(`${url}/closet/${uid}`, headers());

const addProduct = (newProduct) => axios.post(`${url}/closet${newProduct}`, headers());

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getClosetByUid,
  addProduct,
};
