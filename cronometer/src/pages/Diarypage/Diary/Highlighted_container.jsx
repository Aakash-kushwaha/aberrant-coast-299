import React from 'react'
import Circularprogressbar from './Circularprogressbar'
import styles from './highlighted.module.css'
import Highlightednutrients from './Highlightednutrients'


const fakedata = new Array(2).fill(0)
// console.log(fakedata)


const Highlighted_container = () => {
  return (
    <div container={styles.Highlightedcontainer}>
    <div style={{display:"flex",width:"738px",height:"111px",gap:".5rem"}}>
         <Circularprogressbar percentage={20} calories={"300 %"} color={"green"} unit={"Kcal"}></Circularprogressbar>
         <Circularprogressbar percentage={20} calories={"234 %"} unit={"g"}></Circularprogressbar>
         <Circularprogressbar percentage={50} calories={"423 %"} unit={"Iron"}></Circularprogressbar>
         <Circularprogressbar percentage={70} calories={"534 %"} unit={"calcium"}></Circularprogressbar>
         <Circularprogressbar percentage={10} calories={"123 %"} unit={"Vit. A"}></Circularprogressbar>
         <Circularprogressbar percentage={30} calories={"563 %"} unit={"Vit. C"}></Circularprogressbar>
         <Circularprogressbar percentage={90} calories={"634 %"} unit={"Vit12. flotate"}></Circularprogressbar>
         <Circularprogressbar percentage={20} calories={"455 %"} unit={"Pottassium"}></Circularprogressbar>
    </div>
       <div className={styles.Highlighted_vitamins}>
        <div className={styles.general}>
          <h3>General</h3>
         {
          fakedata.map((el)=>{
            return <div >
             <Highlightednutrients vitamin={"b1"} value={50} unit={"kcal"} barcolor={"green"} totalpercent={30} width={"100px"}></Highlightednutrients>
             </div>
          })
         }
        </div>
       </div>
    </div> )
}

export default Highlighted_container