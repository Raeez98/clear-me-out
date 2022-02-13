import React from 'react'
import { useState } from 'react'

const Raeez1 = () => {
    const [myInput,setMyinput]=useState("");
   const [result,setResult]=useState([]);
  return (
    <div>
       <input type="text" onChange={(e)=>
           setMyinput(e.target.value)}
           value={myInput}/>
       <button onClick={()=>{
           setResult((prev)=>[...prev,myInput])
           setMyinput("")
       }}>Add</button>

       <div>
           {result.map((value,i)=><div key={i}>{value}

         <button onClick={
             ()=>{
                 setResult(result.filter((_val,index)=>i!==index))
             }
         }>close</button>
         
         
           
           </div>)}
       </div>
    </div>
  )
}

export default Raeez1