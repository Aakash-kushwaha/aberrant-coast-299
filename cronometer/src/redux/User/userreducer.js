import * as types from "./actionType"

const initialdata = {
    Food:null,
    id:null,
    data:null,
    error:"",
    loading:false
}

const userreducer = (state=initialdata,{type,payload})=>{
    switch(type){
      case types.FETCH_FOODDATA_REQUEST:{
            return{
                ...state
            }
        }
        case types.FETCH_FOODDATA_SUCCESS:{
            return{
               ...state
            }
        }
        case types.FETCH_FOODDATA_FAILED:{
            return{
                ...state
            }
        }
        case types.POST_USERDATA_REQUEST:{
            return{
                ...state
            }
        }
        case types.POST_USERDATA_SUCCESS:{
            return{
                ...state
            }
        }
        case types.POST_USERDATA_FAILED:{
            return{
                ...state
            }
        }
        case types.DELETE_SINGLEDATA_REQUEST:{
            return{
                ...state
            }
        }
        case types.DELETE_SINGLEDATA_SUCCESS:{
            return{
                ...state
            }
        }
        case types.DELETE_SINGLEDATA_FAILED:{
            return{
                ...state
            }
        }
        default:return state
    }
}

export default userreducer