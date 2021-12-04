import React from 'react'

const InputField = ({value,onChange,label,type="text",error}) => {
    return (
        <div className="inputform"> 
                    <input type={type} 
                    value={value}
                    onChange={(e)=>{
                        onChange(e.target.value)
                        }}
                    
                    /> 
                    <div className={`inputfield ${value? "filled-inputfield":""}`}>{label}
                    </div> 
                    {error &&<div className="text-field-error-text">
                        {error}
                        </div>}
                </div>
    )
}

export default InputField
