import React, { useState } from 'react'
import InputField from '../../Components/InputField';
import "../Signup/signup.css"

const Signup = () => {
    const[formData,setFormData]=useState({
        fullName: "",
        email: "",
        password: "",
        confirmpassword: ""
   });
  
   const{fullName,email,password,confirmpassword}=formData;
     const onChange=(key,value)=>
     {
        setFormData({
            ...formData,
           [key]:value
        })
     }
    return (
        <div className="signupcontainer-page">
          <div className="sign-up-contanier">
            <div className="signing-title">Sign Up</div>
            <form>
            
                    <InputField
                    value={email}
                    onChange={(value)=>
                        onChange("email",value)
                        }
                        label="Email"/>
                          <InputField
                    value={password}
                    onChange={(value)=>
                        onChange("password",value)
                        }
                        label="Password"
                        type="password"
                    />
                    
                <button className="signing-button">Sign Up</button>
            </form>
        </div>
    </div>
    )
}

export default Signup
