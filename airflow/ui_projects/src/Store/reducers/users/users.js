import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
  data: null,
  error: null,
};

const updateUsers = (state, action) => updateObject(state, action.payload);

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USERS:
      return updateUsers(state, action);
    default:
      return state;
  }
};

export default usersReducer;
