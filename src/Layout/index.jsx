import { Outlet,useNavigate } from "react-router-dom"
import Logo from "../assets/icons/ClearMeOut (1).svg"
import { Link } from "react-router-dom"

const Layout = () => {
    const navigate=useNavigate();
    return (
        <div className="App">
            <header>
                <div className="container">
                <div className="logo-section">
                    
                 <img src={Logo} alt=""/>
                 </div>
                 
                
                <div className="login-button"  onClick={()=>
                {
                    navigate("/login")
                }
                }>
                    Login
                </div>
                <div className="signup-button" onClick={()=>
                {
                    navigate("/signup")
                }
                }>
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
