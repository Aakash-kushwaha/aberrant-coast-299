import React from "react";
import styles from "./addfood.module.css";
import { appleimg, exercise, biometric, notes } from "./img";
import FoodTable from "./FoodTable";
import Addfoodmodal from "./Addfoodmodal";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData, getUserFood } from "../../../../redux/User/action";
const Addfood = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  if(month<9) month = "0"+month
  
  // console.log(typeof month)
  let date = today.getDate();
  let finaldate = `${year}-${month}-${date}`;

  let tokenfromlocalstorage = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrQGdtYWlsLmNvbSIsImlhdCI6MTY2MTQxNzUzMSwiZXhwIjoxNjYxNTkwMzMxfQ.YG56k5kRiIecHii6gYf1xg8IKvY5DXgkX9E4yhkiTRI";
  
    const [curdate,setDate]= React.useState("")
  const foodData = useSelector((store) => store.userreducer.Food);
  const userFood = useSelector((store) => store.userreducer.UserfoodData)
  // console.log(userFood,"addfood")
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchFoodData({ tokenfromlocalstorage }));
    dispatch(getUserFood({ tokenfromlocalstorage,finaldate }));
  }, []);

  const handeDate=(e)=>{
     setDate(e.target.value)
     
  }

  return (
    <div className={styles.maincontainer}>
     <div className={styles.date} onChange={handeDate}>
     <div style={{width:"40%",margin:"auto"}}>{curdate}</div>
     <div style={{border:"1px solid silver"}}>
     <div style={{width:"40%",margin:"auto"}}>
     <input  style={{border:"1px solid silver"}} type="date"></input>
     </div>
     </div>
      
 
     </div>
    
    <div className={styles.container}>
      <div className={styles.headernav}>
        <div>
          <img src={appleimg}></img>
          <Addfoodmodal
            tokenfromlocalstorage={tokenfromlocalstorage}
            foodData={foodData}
            finaldate={finaldate}
          ></Addfoodmodal>
        </div>
        <div>
          <img src={exercise}></img>
          <div>ADD EXERCISE</div>
        </div>
        <div>
          <img src={biometric}></img>
          <div>ADD BIOMETRIC</div>
        </div>
        <div>
          <img src={notes}></img>
          <div>ADD NOTES</div>
        </div>
      </div>
      <FoodTable userFood={userFood}></FoodTable>
    </div>
    </div> );
};

export default Addfood;
