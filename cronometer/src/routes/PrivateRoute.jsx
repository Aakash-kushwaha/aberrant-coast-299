import React from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    let token = JSON.parse(localStorage.getItem("token"))

   

    React.useEffect(()=>{
   if(!token){
         navigate("/login")
           
        }
    },[])
    if(token) return children
}

export default PrivateRoute