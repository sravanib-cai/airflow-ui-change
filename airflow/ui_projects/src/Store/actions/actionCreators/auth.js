import * as actionTypes from '../actionTypes';
import { parseJwt } from '../../utility';

export const updateUser = (data) => (dispatch) => {
  const { access, refresh } = data;

  const profile = parseJwt(access);

  dispatch({
    type: actionTypes.UPDATE_USER,
    user: {
      access,
      refresh,
      profile,
    },
  });
};
export default updateUser;
