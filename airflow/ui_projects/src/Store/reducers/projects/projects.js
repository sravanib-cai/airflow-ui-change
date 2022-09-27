import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
  data: null,
  error: null,
};

const updateProjects = (state, action) => updateObject(state, action.payload);

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PROJECTS:
      return updateProjects(state, action);
    default:
      return state;
  }
};

export default projectsReducer;
