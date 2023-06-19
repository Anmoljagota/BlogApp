import {
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./actionTypes";
const initial_state={
    loading:false,
    error:false,
    userdata:[],
    token:""
}
const reducer=(state=initial_state,action)=>{
const {type,payload}=action;
switch(type){
    case REGISTER_USER_LOADING:return {...state,loading:true,error:false}
    case REGISTER_USER_SUCCESS:return {...state,loading:false,error:false,token:payload}
    case REGISTER_USER_ERROR:return {...state,loading:false,error:true}
    default:return state
}
}
export {reducer}
