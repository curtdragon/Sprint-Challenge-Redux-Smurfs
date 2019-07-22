/*
  Be sure to import in all of the action types from `../actions`
*/

import { 
  GET_SMURFS_START, 
  GET_SMURFS_SUCCESS, 
  GET_SMURFS_FAILED,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED, 
  // UPDATE_SMURF, 
  // DELETE_SMURF
} from "../actions/index";

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
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf:true,
      }
    
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: null,
        smurfs: action.payload
      }

    case ADD_SMURF_FAILED:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload.message,
      }  

    case GET_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true
      }

    case GET_SMURFS_SUCCESS:{
      return {
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload,
      }
    }

    case GET_SMURFS_FAILED:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload.message,
      }

    // case UPDATE_SMURF:
    //   return {
    //     ...state,
    //   }
    // case DELETE_SMURF:
    //   return {
    //     ...state,
    //   }
    default:
      return state;
  }
}