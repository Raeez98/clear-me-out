import React, { useState } from 'react'
import "./signup.css"

const Signup = () => {
    const[formData,setFormData]=useState({
        fullName: "",
        email: "",
        password: "",
        confirmpassword: ""
   });
  
   const{fullName,email,password,confirmpassword}=formData;
   
    return (
        <div className="signupcontainer-page">
          <div className="sign-up-contanier">
            <div className="signing-title">Sign Up</div>
            <form>
                <div className="inputform"> 
                    <input type="text" 
                    value={fullName}
                    onChange={(e)=>{
                            setFormData({
                            ...formData,
                            fullName:e.target.value
                        })
                    }}
                    />  
                    <div className="inputfield">FullName</div>   
                </div>
                <div className="inputform">
                    <input type="text"/>    
                    <div className="inputfield">Email</div> 
                </div>
                <div className="inputform">
                     <input type="text"/>    
                    <div className="inputfield">Password</div>
                </div>
                <div className="inputform">
                    <input type="text"/>      
                    <div className="inputfield">Confirm Password</div>
                </div>
                <button className="signing-button">Submit</button>
            </form>
        </div>
    </div>
    )
}

export default Signup
