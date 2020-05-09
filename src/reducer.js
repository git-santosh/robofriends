import { 
  CHANGE_SEARCH_FIELD,
  REQ_PENDING,
  REQ_SUCCESS,
  REQ_FAILED
 } from "./constants";

const initialState = {
  searchField:'',
}

export const searchRobots = (state=initialState, action={}) =>{
  switch(action.type){
    case CHANGE_SEARCH_FIELD : 
      return Object.assign({},state,{searchField : action.payload})
      // return  {...state,searchField : action.payload}
      default:
        return state
  }
}

const initialStateRobots = {
  isPending:false,
  robots:[],
  error:''
}
export const requestRobots = (state=initialStateRobots, action={}) =>{
  switch(action.type){
    case REQ_PENDING : 
      return Object.assign({},state,{isPending : true})
    case REQ_SUCCESS : 
      return Object.assign({},state,{isPending:false,robots:action.payload})
    case REQ_FAILED :
      return Object.assign({},state,{isPending:false,error:action.payload})
      default:
        return state
  }
}