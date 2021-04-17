// i want to write a data call that will call products by closetId
// I want to write a data call that will add product to closet
// I want to write a data call that will delete product to closet
// I want to write a data call that will update product to closet

import axios from 'axios';

const SneaksAPI = require('sneaks-api');

const sneaks = new SneaksAPI();

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

const getProductByClosetId = (closetId) => axios.get(`${url}/product/${closetId}`, headers());

const getSearch = (search) => sneaks.getProducts(search, (err, products) => {
  console.log(products);
  return products;
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSearch,
  getProductByClosetId,
};
