import React from "react";
import {Box,Stack,Progress } from '@chakra-ui/react'
import styles from "./Lineprogressbar.module.css"

const Lineprogressbar = ({vitamin,value,unit,barcolor,totalpercent,width,label}) => {
    // console.log(vitamin,"vit")
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-between",paddingBottom:"0.5rem"}}>
        <div style={{width:"100px",fontSize:"15px",fontFamily:"sans-serif",fontWeight:600,padding:"0.4rem"}}>{vitamin}</div>
        <div >
        <h3 className={styles.details}>{totalpercent+Math.floor(Math.random()*100)}{label}</h3>
        <Progress border={"1px solid yellow"} colorScheme={barcolor?barcolor:"green"} height="20px" value={totalpercent} maxvalue={400} width={width}/>
        </div>
        

    </div>
       
 </> );
};

export default Lineprogressbar;