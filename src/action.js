import { 
  CHANGE_SEARCH_FIELD,
  REQ_PENDING,
  REQ_SUCCESS,
  REQ_FAILED
 } from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots  = () => (dispatch) =>{
  dispatch({type:REQ_PENDING})
  fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => dispatch({ type:REQ_SUCCESS,payload:users}) )
      .catch((err) => dispatch({ type:REQ_FAILED,payload:err}));
}
