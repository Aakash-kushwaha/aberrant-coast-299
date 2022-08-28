import {
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import Circularprogressbar from "./Circularprogressbar";
import styles from "./highlighted.module.css";
import Highlightednutrients from "./Highlightednutrients";
import Lineprogressbar from "./Lineprogressbar";

let mineral = [
  "Fiber",
  "Iron",
  "calcium",
  "Vit. A",
  "Vit. c",
  "vit b:12",
  "vit. k",
  "Vit. B6",
];
const Highlighted_container = ({ userFood }) => {
  // let newdata=userFood && userFood[0].Food.General
  // consolelog(newdata,"newsdata")
  // userFood && console.log("user", userFood);

  return (
    <div container={styles.Highlightedcontainer}>
      <div
        style={{
          display: "flex",
          height: "111px",
          gap: ".5rem",
          // border:"1px solid silver"
        }}
      >
        {userFood &&
          userFood.Total &&
          userFood.Total.Lipids.map((el,index) => {
            if (el.name == "TransFats") return;
            return (
              <CircularProgress
                value={Number(el.val)}
                key={index}
                color={
                  Math.floor(Math.random() * 100) % 2 == 0 ? "#f9ce6a" : "teal"
                }
                size="102px"
                thickness="10px"
              >
                <CircularProgressLabel>
                  <Text fontSize={"16px"}> {el.val}%</Text>

                  <Text fontSize={"16px"}>
                    {mineral[Math.floor(Math.random() * 10)]}
                  </Text>
                </CircularProgressLabel>
              </CircularProgress>
            );
          })}
      </div>
      <div className={styles.Highlighted_vitamins}>
        <div>
          <div className={styles.general}>
            <div className={styles.mineralHeading}>General</div>
            {userFood &&
              userFood.Total &&
              userFood.Total.General.map((el,index) => {
               {/* console.log(typeof Number(el.val)) */}
                return (
                  <Highlightednutrients
                    vitamin={el.name}
                    value={el.val}
                    key={index}
                    unit={el.unit}
                    totalpercent={Number(el.val)}
                    width={"100px"}
                  ></Highlightednutrients>
                );
              })}
          </div>
          <div className={styles.general}>
          <div className={styles.mineralHeading}>
            Carbohydrates
          </div>
            {userFood &&
              userFood.Total &&
              userFood.Total.Carbohydrates.map((el,index) => {
               {/* console.log(typeof Number(el.val)) */}
                return (
                  <Highlightednutrients
                    vitamin={el.name}
                    value={el.val}
                    key={index}
                    unit={el.unit}
                    totalpercent={Number(el.val)}
                    width={"100px"}
                  ></Highlightednutrients>
                );
              })}
          </div>
          <div className={styles.general}>
          <div className={styles.mineralHeading}>  Lipids </div>
            {userFood &&
              userFood.Total &&
              userFood.Total.Lipids.map((el,index) => {
               {/* console.log(typeof Number(el.val)) */}
                return (
                  <Highlightednutrients
                    vitamin={el.name}
                    value={el.val}
                    key={index}
                    unit={el.unit}
                    totalpercent={Number(el.val)}
                    width={"100px"}
                  ></Highlightednutrients>
                );
              })}
          </div>
          <div className={styles.general}>
          <div className={styles.mineralHeading}> Protein </div>
            {userFood &&
              userFood.Total &&
              userFood.Total.Protein.map((el,index) => {
               {/* console.log(typeof Number(el.val)) */}
                return (
                  <Highlightednutrients
                    vitamin={el.name}
                    value={el.val}
                    key={index}
                    unit={el.unit}
                    totalpercent={Number(el.val)}
                    width={"100px"}
                  ></Highlightednutrients>
                );
              })}
          </div>
        </div>
       <div>
       <div className={styles.general}>
          <div className={styles.mineralHeading}> Vitamins </div>
            {userFood &&
              userFood.Total &&
              userFood.Total.Vitamins.map((el,index) => {
               {/* console.log(typeof Number(el.val)) */}
                return (
                  <Highlightednutrients
                    vitamin={el.name}
                    key={index}
                    value={el.val}
                    unit={el.unit}
                    totalpercent={Number(el.val)}
                    width={"100px"}
                  ></Highlightednutrients>
                );
              })}
          </div>
          <div className={styles.general}>
          <div className={styles.mineralHeading}> Minerals </div>
            {userFood &&
              userFood.Total &&
              userFood.Total.Minerals.map((el,index) => {
               {/* console.log(typeof Number(el.val)) */}
                return (
                  <Highlightednutrients
                    vitamin={el.name}
                    value={el.val}
                    unit={el.unit}
                    key={index}
                    totalpercent={Number(el.val)}
                    width={"100px"}
                  ></Highlightednutrients>
                );
              })}
          </div>
       </div>
          
      </div>
    </div>
  );
};

export default Highlighted_container;
