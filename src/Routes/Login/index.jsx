import React from 'react'
import "./login.css"


const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type ="text"  placeholder="Email" /><br/>
                <input type ="text"  placeholder="password" /><br/>
               <input type="submit" value="Submt"/>
               </form>

        </div>
    )
}

export default Login
