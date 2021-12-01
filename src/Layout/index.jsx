import { Outlet } from "react-router"
import Logo from "../assets/icons/ClearMeOut (1).svg"
import { Link } from "react-router-dom"

const Layout = () => {
    return (
        <div className="App">
            <header>
                <div className="container">
                <div className="logo-section">
                 <img src={Logo} alt=""/>
                </div>
                <div className="login-button">
                    Login
                </div>
                <div className="signup-button">
                    Signup
                </div>
              </div>  
               
                 
            </header>
           <div className="body-conatiner">
            <Outlet/>
            </div>
            </div>
        
    )
}

export default Layout
