import React, { useState } from 'react'
import InputField from '../../Components/InputField';
import { isvalidEmail } from '../../Utility/validation';
import {useEffect } from 'react';
import "./signup.css"

const Signup = () => {
    const[formData,setFormData]=useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
   });
   const[formErrorData,setFormErrorData]=useState({
    fullNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: ""
});
const[isFormSubmitted,setIsFormSubmitted]=useState(false)

   useEffect(()=>{
       formValidate();
   },[formData])
   
   const{fullName,email,password,confirmPassword}=formData;
   const{fullNameError,emailError,passwordError,confirmPasswordError}=formErrorData;
     const onChange=(key,value)=>
     {
        setFormData(prev=>({
            ...prev,
           [key]:value
        }))
        
     }
     const onError=(key,value)=>
     {
        setFormErrorData(prev=>{
            return {...prev,
           [key]:value
        }
        })
     }
     const formValidate=()=>{
       let  isValidform=true;
        if(!fullName){
            onError("fullNameError","Provide Your Full Name");
            isValidform=false;
        }else{
            if(fullName.length<=3){
                onError("fullNameError","Enter valid Name");
            }
            else{
                 onError("fullNameError","");
            }
        }
            if(!password){
            onError("passwordError","Password Cannot be empty");
            isValidform=false;
        }else{
            if(password.length !==8){
                onError("passwordError","must contains 8 charcters");
            }
            else{
            onError("passwordError","");
            }
        }
            if(!confirmPassword){
            onError("confirmPasswordError","Confirm Your Password");
            isValidform=false;
        }else{
            if(password !==confirmPassword){
               
            }
            else{
                onError("confirmPasswordError","");
            }
        }
        
            if(!isvalidEmail(email)){
            onError("emailError","Enter valid email")
            isValidform=false;
        }else{
            onError("emailError","");
        }
        return isValidform
     }
    const signUpCall=(e)=>{
         e.preventDefault();
       setIsFormSubmitted(true);
       if(formValidate()){
           console.log("signup success");
       }
        
    }
   
     return (
        <div className="signupcontainer-page">
          <div className="sign-up-contanier">
            <div className="signing-title">Sign Up</div>
            <form onSubmit={signUpCall}>
                <InputField
                    value={fullName}
                    onChange={(value)=>
                        onChange("fullName",value)
                        }
                        label="Full Name"
                        error={fullNameError}
                        isFormSubmitted={isFormSubmitted}
                    /> 
                    <InputField
                    value={email}
                    onChange={(value)=>
                        onChange("email",value)
                        }
                        label="Email"
                        error={emailError}
                        isFormSubmitted={isFormSubmitted}
                        />
                          <InputField
                    value={password}
                    onChange={(value)=>
                        onChange("password",value)
                        }
                        label="Password"
                        type="password"
                        error={passwordError}
                        isFormSubmitted={isFormSubmitted}

                        />
                          <InputField
                    value={confirmPassword}
                    onChange={(value)=>
                        onChange("confirmPassword",value)
                        }
                        label="Confirm Password"
                        type="password"
                        error={confirmPasswordError}
                        isFormSubmitted={isFormSubmitted}/>
                    
                    
                <button className="signing-button" type="submit">Sign Up</button>
            </form>
        </div>
    </div>
    )
}

export default Signup
