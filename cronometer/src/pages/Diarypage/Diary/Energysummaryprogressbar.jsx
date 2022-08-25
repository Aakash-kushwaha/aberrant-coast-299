import React from "react";
import { Box } from "@chakra-ui/react";
import styles from "./Energybar.module.css";
import Circularprogressbar from "./Circularprogressbar";
import Lineprogressbar from "./Lineprogressbar";
import Overallnutrition from "./Highlightednutrients";

const Energysummaryprogressbar = () => {
  return (
    <div>
      <div className={styles.Energybar}>
        <div>
          <div className={styles.consumed_burnedmain}>
            <h2 style={{textAlign:"left",paddingLeft:"0.5rem"}}>Energy Summary</h2>
            <div className={styles.consumed_burned}>
              <Circularprogressbar
                heading={"Consumed"}
                percentage={20}
                calories={"300"}
                unit={"Kcal"}
              ></Circularprogressbar>
              <Circularprogressbar
                heading={"Burned"}
                percentage={90}
                calories={"600"}
                unit={"Kcal"}
              ></Circularprogressbar>
              <div>
                <div className={styles.caloriesremain}>
                  <div className={styles.caloriesdetails}>-4534</div>
                  <div className={styles.caloriesdetailstext}>calories </div>
                  <div className={styles.caloriesdetailstext}>remaining</div>
                </div>
                <div className={styles.budget}></div>
                <h2>Budget</h2>
              </div>
            </div>
          </div>
        </div>
        <div>
           <div className={styles.macronutrientsmain}>
           <h2 style={{textAlign:"left",paddingLeft:"0.5rem"}}>Macronutrients</h2>
          <div className={styles.macronutrients}>
            <Lineprogressbar
              vitamin={"Enery"}
              barcolor={"yellow"}
              totalpercent={70}
              width={"250px"}
            ></Lineprogressbar>
            <Lineprogressbar
              vitamin={"Protein"}
              barcolor={"green"}
              totalpercent={70}
              width={"250px"}
            ></Lineprogressbar>
            <Lineprogressbar
              vitamin={"Net Carbs"}
              barcolor={"blue"}
              totalpercent={70}
              width={"250px"}
            ></Lineprogressbar>
            <Lineprogressbar
              vitamin={"Fat"}
              barcolor={"red"}
              totalpercent={70}
              width={"250px"}
            ></Lineprogressbar>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energysummaryprogressbar;

{
  /* <Overallnutrition ></Overallnutrition> */
}
