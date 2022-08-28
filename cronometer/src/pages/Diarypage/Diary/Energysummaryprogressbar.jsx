import React from "react";
import { Box, CircularProgress, CircularProgressLabel, Text } from "@chakra-ui/react";
import styles from "./Energybar.module.css";
import Circularprogressbar from "./Circularprogressbar";
import Lineprogressbar from "./Lineprogressbar";
import Overallnutrition from "./Highlightednutrients";
import { ReactReduxContext } from "react-redux";

const Energysummaryprogressbar = (data) => {
  // console.log(data,"enerysumry")
  const [Data, setData] = React.useState([]);
  React.useEffect(() => {
    data && setData(data.Total);
  }, [data]);
  // console.log(Data && Data, "data");
  return (
    <div>
      <div className={styles.Energybar}>
        <div>
          <div className={styles.consumed_burnedmain}>
            <Text fontWeight={600} mb={"1rem"}>
              Energy Summary
            </Text>
            <div className={styles.consumed_burned}>
              <Circularprogressbar
                heading={"Consumed"}
                percentage={20}
                calories={Data}
                unit={"Kcal"}
              ></Circularprogressbar>
              <Box textAlign={"center"}>
                <CircularProgress
                  value={Data && Data.General && Number(Data.General[1].val)}
                  color={"blue"}
                  size="106px"
                  thickness="10px"
                >
                  <CircularProgressLabel>
                    {Data && Data.General && Number(Data.General[1].val)}
                  </CircularProgressLabel>
                </CircularProgress>

                <Box>Burned</Box>
              </Box>

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
          <Text fontWeight={600} mb={"1rem"}>
              Energy Summary
            </Text>
            <div className={styles.macronutrients}>
              {Data &&
                Data.General &&
                Data.General.map((el) => {
                  return (
                    <Lineprogressbar
                      vitamin={el.name}
                      barcolor={Math.floor(Math.random()*100)%2==0?"red":"teal"}
                      totalpercent={Number(el.val)}
                      label={el.unit}
                      width={"250px"}
                    ></Lineprogressbar>
                  );
                })}
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
