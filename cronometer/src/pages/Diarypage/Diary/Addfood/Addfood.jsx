import React from "react";
import styles from "./addfood.module.css";
import { appleimg, exercise, biometric, notes } from "./img";
import FoodTable from "./FoodTable";
import Addfoodmodal from "./Addfoodmodal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExerciseData,
  fetchFoodData,
  getUserFood,
  postExerciseData,
  postUserData,
} from "../../../../redux/User/action";
import { Box, Heading, Input } from "@chakra-ui/react";
import Energysummaryprogressbar from "../Energysummaryprogressbar";
import Highlighted_container from "../Highlighted_container";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import LoginHeader from "../../../../components/header/LoginHeader";
import InnerRoutes from "../InnerNavbar";
import InnerNav from "../InnerNavbar";

const Addfood = () => {
  const [finaldate, setDate] = React.useState("");
  const [value, onChange] = React.useState(new Date());
  // console.log(value,"curdate")

  const curentDate = () => {
    // console.log(value,"value")
    let year = value.getFullYear();

    let month = value.getMonth() + 1;
    if (month < 9) month = "0" + month;

    // console.log(typeof month)
    let date = value.getDate();
    if (date < 9) date = "0" + date;
    let curdate = `${year}-${month}-${date}`;
    curdate && setDate(curdate);
  };
  // console.log(finaldate,"finaldate")
  let tokenfromlocalstorage = JSON.parse(localStorage.getItem("token"));

  const [exser, setExer] = React.useState([]);
  const foodData = useSelector((store) => store.userreducer.Food);
  const userFood = useSelector((store) => store.userreducer.UserfoodData);
  const Exercise = useSelector((store) => store.userreducer.exerciseData);

  const dispatch = useDispatch();

  React.useEffect(() => {
    curentDate();
    // console.log(finaldate,"date")
    dispatch(fetchFoodData({ tokenfromlocalstorage }));
    dispatch(fetchExerciseData({ tokenfromlocalstorage }));

    // console.log(finaldate,"date")
  }, []);

  React.useEffect(() => {
    curentDate();
    finaldate && dispatch(getUserFood({ tokenfromlocalstorage, finaldate }));
  }, [value]);

  React.useEffect(() => {
    Exercise && setExer(Exercise.data);
  }, [Exercise]);

  // console.log(exser,"date bhar")
  const DatewiseData = () => {
    // setDate(e.target.value);

    finaldate && dispatch(getUserFood({ tokenfromlocalstorage, finaldate }));
  };

  const handleClick = (id, unitfood) => {
    // console.log(id,unitfood,"id food")
    dispatch(
      postUserData({ id, tokenfromlocalstorage, finaldate, unitfood })
    ).then((res) =>
      dispatch(getUserFood({ tokenfromlocalstorage, finaldate }))
    );
  };

  const sendExercise = (id, unitfood) => {
    // console.log(id,unitfood,"id food")
    dispatch(postExerciseData({ id, tokenfromlocalstorage, finaldate })).then(
      (res) => dispatch(fetchExerciseData({ tokenfromlocalstorage, finaldate }))
    );
  };

  return (
    <>
      {/* <LoginHeader></LoginHeader> */}
      <InnerNav></InnerNav>
      <div className={styles.maincontainer}>
        <div className={styles.leftDiv}>
          <div className={styles.date}>
            <Calendar onChange={onChange} value={value} />
          </div>
          <Heading textAlign={"center"} mb="1rem" fontWeight={"500"} color="orange">Advertisements</Heading>
          <div className={styles.addvertisement}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3WEEkJy3j-99gmKlmZSClrkfANCZiMr_IA&usqp=CAU"></img>
          </div>
          <div className={styles.addvertisement}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKkztfE-0q43Valfc0UGCMPhugUvMltrRXw&usqp=CAU"></img>
          </div>
          <div className={styles.addvertisement}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGG0o0GX1ZrjcaXwBVLtB7BjySYvF1G_pHA&usqp=CAU"></img>
          </div>
          <div className={styles.addvertisement}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRHywS71s3P1N9gnBx5KXdCKWCyJP9EDg1Q&usqp=CAU"></img>
          </div>
        </div>

        <div>
          <div className={styles.table_container}>
            <div className={styles.headernav}>
              <div>
                <img src={appleimg}></img>
                <Addfoodmodal
                  tokenfromlocalstorage={tokenfromlocalstorage}
                  foodData={foodData}
                  finaldate={finaldate}
                  name={"ADD FOOD"}
                  handleClick={handleClick}
                ></Addfoodmodal>
              </div>
              <div>
                <img src={exercise}></img>
                <Addfoodmodal
                  tokenfromlocalstorage={tokenfromlocalstorage}
                  foodData={exser}
                  finaldate={finaldate}
                  name={"ADD EXERCISE"}
                  handleClick={sendExercise}
                ></Addfoodmodal>
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
          </div>
          <div border="1px solid silver">
            <Energysummaryprogressbar {...userFood}></Energysummaryprogressbar>
            <Highlighted_container userFood={userFood}></Highlighted_container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addfood;
