import React from "react";
import { Box, Stack, Progress } from "@chakra-ui/react";
import styles from "./Lineprogressbar.module.css";

const Highlightednutrients = ({
  vitamin,
  value,
  unit,
  barcolor,
  totalpercent,
  width,
}) => {
  // console.log(vitamin, "vit");
  return (
    <>
    <div styles={styles.container}>
      <div style={{padding:"2px", display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "100px" ,paddingLeft:"9px"}}>
          {vitamin}
        </div>
        <div
          style={{ width: value ? "100px" : "0px" }}
        >
          {value}
        </div>
        <div
          style={{ width: unit ? "100px" : "0px" }}
        >
          {unit}
        </div>
        <div>
          <h3 className={styles.percentcount}>{totalpercent}%</h3>
          <Progress
            colorScheme={  Math.floor(Math.random() * 100) % 2 == 0 ? "yellow" : "green"}
            height="22px"
            value={totalpercent<0?20:totalpercent}
            maxvalue={400}
            width={width}
          />
        </div>
      </div>
    </div>
 </> );
};

export default Highlightednutrients;
