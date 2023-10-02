import { useEffect, useState } from "react";
import Logo from "../assets/foodvilla.png"

const loggedInuser = () => {
    // Api call to check authentication
    return true;
}
 const Title = () => (
    <a href="/">
    <img
    className="logo" 
    alt="logo" 
    src={Logo}
    />
    </a>
);

const Header = () => {
  const [isLoggedIn , setIsloggedIn] = useState(false)

  
    return(
        <div className="header">
            <Title />
           
             <div className="nav-items">
            <ul>
                <li>Home</li> 
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        {isLoggedIn ? (<button onClick={() => setIsloggedIn(false)}>Logout</button>) :
        (<button onClick={() => setIsloggedIn(true)}>Login</button>)}
        
        
        </div>
    );
};
export default Header;