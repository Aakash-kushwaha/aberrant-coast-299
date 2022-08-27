import { CircularProgress, CircularProgressLabel, Text } from '@chakra-ui/react'
import React from 'react'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import Circularprogressbar from './Circularprogressbar'
import styles from './highlighted.module.css'
import Highlightednutrients from './Highlightednutrients'



const Highlighted_container = ({userFood}) => {

   // let newdata=userFood && userFood[0].Food.General
   // consolelog(newdata,"newsdata")
 userFood &&  console.log("user",userFood)



  return (
    <div container={styles.Highlightedcontainer}>
    <div style={{display:"flex",width:"738px",height:"111px",gap:".5rem"}}>


{

   userFood && userFood.Total && userFood.Total.Lipids.map((el)=>{
      if(el.name=="TransFats") return
    return  <CircularProgress
                  value={ Number(el.val)}
               
                  color={Math.floor(Math.random()*100)%2==0?"#f9ce6a":"teal"}
                  size="102px"
                  thickness="10px"
                >
                  <CircularProgressLabel>
                  {userFood && userFood.Total && Number(userFood.Total.Lipids[1].val)}%
                    <br></br>
                  <Text fontSize={"16px"}>Fiber</Text>  
                  </CircularProgressLabel>
                    
                </CircularProgress>
   })
}

   {/* {
      userFood && userFood.Total && userFood.Total.Lipids.map((el)=>{

       return  <CircularProgressbarWithChildren
     value={(Number(el.val))}   
  styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    textSize: '16px',
    pathTransitionDuration: 0.5,
    pathColor: `green`,
    trailColor: 'whitesmoke',
  })}
   maxValue={100}>

  </CircularProgressbarWithChildren>
           
      })

   } */}
    </div>
       <div className={styles.Highlighted_vitamins}>
       <div>
        <div className={styles.general}>
          <h3>General</h3>
         {
            userFood && userFood.Food_data.map((el,index)=>{
            return <div  key={index}>
             <Highlightednutrients 
             vitamin={el.General} value={50} unit={(el.Food.Carbohydrates.Carbs.unit)} barcolor={"green"} totalpercent={Number(el.Food.Carbohydrates.Carbs.val)} width={"100px"}>

             </Highlightednutrients>
             </div>
          })    
         }
        </div>
        </div>
       </div>
    </div> )
}

export default Highlighted_container