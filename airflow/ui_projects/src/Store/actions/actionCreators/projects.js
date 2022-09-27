import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const updateProjects = (token) => async (dispatch) => {
  try {
    const config = {
      method: 'GET',
      url: `${process.env.REACT_APP_API_BASE_URL}/api/current_user/projects/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios(config);
    dispatch({
      type: actionTypes.UPDATE_PROJECTS,
      payload: {
        data: response.data.projects,
        error: null,
      },
    });
  } catch (e) {
    dispatch({
      type: actionTypes.UPDATE_PROJECTS,
      payload: {
        data: null,
        error: e,
      },
    });
  }
};
export default updateProjects;
