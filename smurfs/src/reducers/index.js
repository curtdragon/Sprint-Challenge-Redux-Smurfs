/*
  Be sure to import in all of the action types from `../actions`
*/

import { ADD_SMURF, GET_SMURFS, UPDATE_SMURF, DELETE_SMURF} from "../actions/index";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function rootReducer(state = initialState, action) {
  switch (action.type){
    case ADD_SMURF:
      return {
        ...state,
      }
    case GET_SMURFS:
      return {
        ...state,
      }
    case UPDATE_SMURF:
      return {
        ...state,
      }
    case DELETE_SMURF:
      return {
        ...state,
      }
    default:
      return state;
  }
}