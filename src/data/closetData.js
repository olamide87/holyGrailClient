import axios from 'axios';

const url = 'http://localhost:8088';

const headers = () => (
  {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  }
);

const getAllClosets = () => axios.get(`${url}/closets`, headers());

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllClosets,
};
