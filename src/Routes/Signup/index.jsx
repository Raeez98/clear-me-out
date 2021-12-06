import React, { useState } from 'react'
import InputField from '../../Components/InputField';
import { isvalidEmail } from '../../Utility/validation';
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

  
   const{fullName,email,password,confirmPassword}=formData;
   const{fullNameError,emailError,passwordError,confirmPasswordError}=formErrorData;
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
     const signUpCall=(e)=>{
         e.preventDefault();
         if(!fullName){
            onError("fullNameError","Provide Your Full Name");
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
        }else{
            onError("passwordError","");
        }
        if(!confirmPassword){
            onError("confirmPasswordError","Password Cannot be empty");
        }else{
            if(password !==confirmPassword){
                onError("confirmPasswordError","Password Miss Match");
            }
            else{
                onError("confirmPasswordError","");
            }
        }
        
        if(!isvalidEmail(email)){
            onError("emailError","Enter valid email")
        }else{
            onError("emailError","");
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
                    /> 
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
                          <InputField
                    value={confirmPassword}
                    onChange={(value)=>
                        onChange("confirmPassword",value)
                        }
                        label="Confirm Password"
                        type="password"
                        error={confirmPasswordError}/>
                    
                    
                <button className="signing-button" type="submit">Sign Up</button>
            </form>
        </div>
    </div>
    )
}

export default Signup
