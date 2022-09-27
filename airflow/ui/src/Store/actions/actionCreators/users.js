import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const updateUsers = (token) => async (dispatch) => {
  try {
    const config = {
      method: 'GET',
      url: `${process.env.REACT_APP_API_BASE_URL}/api/users/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios(config);
    dispatch({
      type: actionTypes.UPDATE_USERS,
      payload: {
        data: response.data.users,
        error: null,
      },
    });
  } catch (e) {
    dispatch({
      type: actionTypes.UPDATE_USERS,
      payload: {
        data: null,
        error: e,
      },
    });
  }
};
export default updateUsers;
