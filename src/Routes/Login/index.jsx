import React, { useState,useEffect } from 'react'
import InputField from '../../Components/InputField';
import {isvalidEmail } from '../../Utility/validation';
import "../Signup/signup.css"
import { useDispatch } from 'react-redux';


const Login = () => {
    const[formData,setFormData]=useState({
       
        email: "",
        password: "",
        
   });
   const[formErrorData,setFormErrorData]=useState({
   
    emailError: "",
    passwordError: "",
  
});
const[isFormSubmitted,setIsFormSubmitted]=useState(false)

   useEffect(()=>{
       formValidate();
   },[formData])
   

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
    const formValidate=()=>{
        let  isValidform=true;
        
        if(!email){
            onError("emailError","Email cant be empty")
            isValidform=false;
        }
        else{
        if(!isvalidEmail(email)){
            onError("emailError","Enter valid email")
            isValidform=false;
        }else{
            onError("emailError","");
        }}
       
        if(!password){
            onError("passwordError","Password Cannot be empty");
            isValidform=false;
        }
        else{
            if(password.length!==8){
                onError("passwordError","Password must contain 8 characters");
            }
            else{
           onError("passwordError","");
            }
        }
        return isValidform
    } 
    const dispatch=useDispatch();
    const loginCall=(e)=>{
        e.preventDefault();
        setIsFormSubmitted(true);
        if(formValidate()){
            dispatch({
                type:"LoggedIn"

            })
            console.log("login success");
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
                    
                <button className="signing-button">Login</button>
            </form>
        </div>
    </div>
    )
}

export default Login
