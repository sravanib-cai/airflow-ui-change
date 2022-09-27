import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const updateUser = (state, action) => updateObject(state, {
  isLoggedIn: true,
  user: action.user,
});

const logoutUser = (state) => updateObject(state, initialState);

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER:
      return updateUser(state, action);
    case actionTypes.USER_LOGOUT:
      return logoutUser(state, action);
    default:
      return state;
  }
};

export default userReducer;
