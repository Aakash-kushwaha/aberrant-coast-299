import React from 'react'
import {
    CircularProgressbar,
    buildStyles,
    CircularProgressbarWithChildren
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";




const Circularprogressbar = ({heading,percentage,calories,unit}) => {
  return (
    <div>
    <div style={{ width:101, height:101,margin:"auto"}}>
    <CircularProgressbarWithChildren  value={percentage}   
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `green`,
    // textColor: 'black',
    trailColor: 'whitesmoke',
  })}
   maxValue={100}>
   <div>{calories}</div>
   <div>{unit}</div>
  </CircularProgressbarWithChildren>
    </div>
    <h3>{heading}</h3>
</div>)
}

export default Circularprogressbar






