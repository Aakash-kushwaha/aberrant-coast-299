import * as types from "./actionType"

const initialdata = {
    Food:null,
    UserfoodData:null,
    exerciseData: null,
    id:null,
    error:"",
    loading:false
}

const userreducer = (state=initialdata,{type,payload})=>{
    // console.log(type,payload)
    switch(type){
      case types.FETCH_FOODDATA_REQUEST:{
            return{
                ...state,
                loading:true,

            }
        }
        case types.FETCH_FOODDATA_SUCCESS:{
            return{
               ...state,
               loading:false,
               Food:payload
            }
        }
        case types.FETCH_FOODDATA_FAILED:{
            return{
                ...state,
                loading:false,
                error:payload
            }
        }
        case types.GET_USERDATA_REQUEST:{
            return{
                ...state,
                loading:true
            }
        }
        case types.GET_USERDATA_SUCCESS:{
            // console.log(payload,"paylaod")
            return{
                ...state,
                UserfoodData:payload,
                loading:false
            }
        }
        case types.GET_USERDATA_FAILED:{
            return{
                ...state,
                loading:false,
                error:payload
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
        case types.FETCH_EXERCISE_REQUEST:{
            return{
                ...state,
                loading:true,

            }
        }
        case types.FETCH_EXERCISE_SUCCESS:{
            return{
               ...state,
               loading:false,
               exerciseData:payload
            }
        }
        case types.FETCH_EXERCISE_FAILED:{
            return{
                ...state,
                loading:false,
                error:payload
            }
        }
        default:return state
    }
}

export default userreducer