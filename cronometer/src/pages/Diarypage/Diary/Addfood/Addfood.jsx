import React from "react";
import styles from "./addfood.module.css";
import { appleimg, exercise, biometric, notes } from "./img";
import FoodTable from "./FoodTable";
import Addfoodmodal from "./Addfoodmodal";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData, getUserFood } from "../../../../redux/User/action";
import { Box, Input } from "@chakra-ui/react";
import Energysummaryprogressbar from "../Energysummaryprogressbar";
import Highlighted_container from "../Highlighted_container";
const Addfood = () => {

  const [finaldate, setDate] = React.useState("");


  const curentDate =()=>{
    let today = new Date();
    let year = today.getFullYear();
  
    let month = today.getMonth() + 1;
    if (month < 9) month = "0" + month;
  
    // console.log(typeof month)
    let date = today.getDate();
    if(date<9) date = "0"+date
    let curdate = `${year}-${month}-${date}`;
   setDate(curdate)
  }

 

  let tokenfromlocalstorage =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrQGdtYWlsLmNvbSIsImlhdCI6MTY2MTQxNzUzMSwiZXhwIjoxNjYxNTkwMzMxfQ.YG56k5kRiIecHii6gYf1xg8IKvY5DXgkX9E4yhkiTRI";


  const foodData = useSelector((store) => store.userreducer.Food);
  const userFood = useSelector((store) => store.userreducer.UserfoodData);
  // console.log(foodData, "addfood");
  const dispatch = useDispatch();

  React.useEffect(() => {
    curentDate()
      // console.log(finaldate,"date")
    dispatch(fetchFoodData({ tokenfromlocalstorage }));
    ;
  }, []);

  React.useEffect(()=>{
   finaldate && dispatch(getUserFood({ tokenfromlocalstorage,finaldate}))
  },[finaldate])

  // console.log(finaldate,"date bhar")
  const DatewiseData=(e)=>{
    
    setDate(e.target.value)

    // dispatch(getUserFood({ tokenfromlocalstorage,finaldate}))
  }

  return (
    <div className={styles.maincontainer}>
      <div className={styles.date} >
        <div className={styles.curdate}>{finaldate}</div>
        <Box border ="1px solid silver">
          <Box  width= "65%" margin= "auto" >
            <Input  border= "1px solid silver" type="date" w={"100%"} onChange={DatewiseData}></Input>
          </Box>
        </Box>
      </div>

      <Box border="2px solid blue">
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
        <div className={styles.container}>
          <FoodTable userFood={userFood}></FoodTable>
        </div>
        <Energysummaryprogressbar></Energysummaryprogressbar>
        <Highlighted_container  userFood={userFood}></Highlighted_container>
      </Box>
    </div>
  );
};

export default Addfood;
