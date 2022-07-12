import { fetch_data, error } from './action-types';

const initialState = {
  data: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetch_data:
      return { ...state, data: action.payload, error: null };
    case error: {
      return { ...state, data: [], error: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
