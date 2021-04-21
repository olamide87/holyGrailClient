// i want to write a data call that will call products by closetId
// I want to write a data call that will add product to closet
// I want to write a data call that will delete product to closet
// I want to write a data call that will update product to closet

import axios from 'axios';

const url = 'http://localhost:8088';

const headers = () => (
  {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  }
);

// const createHeaders = {
//   headers: {
//     Authorization: `Token ${localStorage.getItem('token')}`,
//     'Content-Type': 'application/json',
//   },
// };

const getProductByClosetId = (closetId) => axios.get(`${url}/product?type=${closetId}`, headers());

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProductByClosetId,
};
