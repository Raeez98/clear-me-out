import React from 'react'
import { useState } from 'react';
import "./raeez.css"

const Raeez = () => {
    const[input,setInput]=useState("");
     const[result,setResult]=useState([])
    return (
        <div className="my-container">
            <div className="my-sub-container">
            <input type="text" onChange={(e)=>
                setInput(e.target.value)} value={input}/>

            <button className="add-button" onClick={()=>{
                setResult((prev)=>[...prev,input])
                setInput("")
            }}
            >ADD</button>
            
            <div className="results-section">
                {result.map((value,i)=><div className="results" key={i}> {value}

    
                          <button className="close-button" onClick=
                          {()=>{setResult(result.filter((_value,index)=>i!==index))
                               }}>
                           close
                          </button>
              
                         </div>)}    
             </div> 
        </div>
        </div>
    )
}

export default Raeez
