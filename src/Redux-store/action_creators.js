import axios from 'axios';
import { error, fetch_data } from './action-types';

export const userDataAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('https://reqres.in/api/users');
      // console.log(data);
      dispatch({
        type: fetch_data,
        payload: data,
      });
      // console.log(data, "redux");
    } catch (err) {
      dispatch({
        type: error,
        payload: err,
      });
    }
  };
};
