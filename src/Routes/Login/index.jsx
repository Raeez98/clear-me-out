import React, { useState } from 'react'
import InputField from '../../Components/InputField';
import {isvalidEmail } from '../../Utility/validation';
import "../Signup/signup.css"


const Login = () => {
    const[formData,setFormData]=useState({
       
        email: "",
        password: "",
        
   });
   const[formErrorData,setFormErrorData]=useState({
   
    emailError: "",
    passwordError: "",
  
});

      const{email,password}=formData;
     const{emailError,passwordError}=formErrorData;
  
     const onChange=(key,value)=>
     {
        setFormData({
            ...formData,
           [key]:value
        })
     }
     const onError=(key,value)=>
     {
        setFormErrorData(prev=>{
            return {...prev,
           [key]:value
        }
        })
    }
     const loginCall=(e)=>{
        e.preventDefault();
        if(!isvalidEmail(email)){
            onError("emailError","Enter valid email")
        }else{
            onError("emailError","");
        }
       
        if(!password){
            onError("passwordError","Password Cannot be empty");
        }
        else{
            if(password.length<=8){
                onError("passwordError","Password must contain 8 characters");
            }
            else{
           onError("passwordError","");
            }
        }
    }   
   
    return (
        <div className="signupcontainer-page">
          <div className="sign-up-contanier">
            <div className="signing-title">Login</div>
            <form onSubmit={loginCall}>
            
                    <InputField
                    value={email}
                    onChange={(value)=>
                        onChange("email",value)
                        }
                        label="Email"
                        error={emailError}
                        />
                          <InputField
                    value={password}
                    onChange={(value)=>
                        onChange("password",value)
                        }
                        label="Password"
                        type="password"
                        error={passwordError}
                    />
                    
                <button className="signing-button">Login</button>
            </form>
        </div>
    </div>
    )
}

export default Login
