import React from 'react'
import {useState } from 'react'

const InputField = ({value,onChange,label,type="text",error,isFormSubmitted=false}) => {
    const[blured,setBlured]=useState(false)
    return (
        <div className="inputform"> 
                    <input type={type} 
                    value={value}
                    onChange={(e)=>{
                        onChange(e.target.value)
                    }}
                    onBlur={()=>{
                        setBlured(true)
                    }
                    }
                    
                    /> 
                    <div className={`inputfield ${value? "filled-inputfield":""}`}>{label} 
                    {/* //when we try to fill form labelled moves upward to empty field// */}
                    </div> 
                    {error && (blured ||isFormSubmitted)&&<div className="text-field-error-text">
                        {error}
                        </div>}
                </div>
    )
}

export default InputField
