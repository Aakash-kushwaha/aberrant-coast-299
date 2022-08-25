import * as types from "./actionType"

const initialdata = {
    token:null,
    id:null,
    data:null,
    error:"",
    loading:false
}

const authreducer = (state=initialdata,{type,payload})=>{
    switch(type){
      case types.SIGNUP_REQUEST:{
            return{
                ...state
            }
        }
        case types.SIGNUP_SUCCESS:{
            return{
               ...state
            }
        }
        case types.SIGNUP_FAILED:{
            return{
                ...state
            }
        }
        case types.LOGIN_REQUEST:{
            return{
                ...state
            }
        }
        case types.LOGIN_SUCCESS:{
            return{
                ...state
            }
        }
        case types.LOGIN_FAILED:{
            return{
                ...state
            }
        }
        default:return state
    }
}

export default authreducer