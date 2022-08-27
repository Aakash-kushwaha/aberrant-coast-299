import axios from "axios"
import * as types from "./actionType"


const fetchFoodDataRequest =()=>{
    return{
        type:types.FETCH_FOODDATA_REQUEST
    }
}

const fetchFoodDataSuccess =(payload)=>{
    return{
        type:types.FETCH_FOODDATA_SUCCESS,
        payload
    }
}

const fetchFoodDataFailed =(payload)=>{
    return{
        type:types.FETCH_FOODDATA_FAILED,
        payload
    }
}


const fetchFoodData=({foodsearch,tokenfromlocalstorage})=>(dispatch)=>{
    dispatch(fetchFoodDataRequest())
    axios.get("http://localhost:8080/food",{
        params:{
          q:foodsearch
        },
        headers:{
            Authorization:`Bearer ${tokenfromlocalstorage}`
        }
    })
  .then((res)=>dispatch(fetchFoodDataSuccess(res.data)))
  .catch((err)=>dispatch(fetchFoodDataFailed(err)))
}


const postFoodDataRequest =()=>{
    return{
        type:types.POST_USERDATA_REQUEST
    }
}

const postFoodDataSuccess =(payload)=>{
    console.log(payload,"post")
    return{
        type:types.POST_USERDATA_SUCCESS,
        payload
    }
}

const postFoodDataFailed =(payload)=>{
    return{
        type:types.POST_USERDATA_FAILED,
        payload
    }
}


const postUserData=({id,tokenfromlocalstorage,finaldate,unitfood})=>(dispatch)=>{
    // console.log(unitfood,"date")
    dispatch(postFoodDataRequest())
   return axios({
        method: 'post',
        url: `http://localhost:8080/food/${id}`,
        headers:{
          Authorization:`Bearer ${tokenfromlocalstorage}`
        },
        data:{
          date:finaldate,
          amount:unitfood
        }
      })
  .then((res)=>dispatch(postFoodDataSuccess(res.data)))
  .catch((err)=>dispatch(postFoodDataFailed(err)))
}






const getUserFoodRequest =()=>{
    return{
        type:types.GET_USERDATA_REQUEST
    }
}

const getUserFoodSuccess =(payload)=>{
    // console.log(payload,"user foood")
    return{
        type:types.GET_USERDATA_SUCCESS,
        payload
    }
}

const getUserFoodFailed =(payload)=>{
    return{
        type:types.GET_USERDATA_FAILED,
        payload
    }
}


const getUserFood=({tokenfromlocalstorage,finaldate})=>(dispatch)=>{
    // console.log(tokenfromlocalstorage,"date", finaldate)
    dispatch(getUserFoodRequest())
    axios({
        method: 'get',
        url: `http://localhost:8080/food/userdashboard`,
        headers:{
          Authorization:`${finaldate} ${tokenfromlocalstorage}`,
        },
      })
  .then((res)=>dispatch(getUserFoodSuccess(res.data)))
  .catch((err)=>dispatch(getUserFoodFailed(err)))
}








export {
    fetchFoodData,
    postUserData,
    getUserFood
}