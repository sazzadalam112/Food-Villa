import { useEffect, useState } from "react";
import Logo from "../assets/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";


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

  const isOnline = useOnline();
    return(
        <div className="header">
            <Title />
           
             <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <li><Link to="/instamart">Instamart</Link></li>
            </ul>
        </div>
        <h1>{isOnline? "✅":"🔴"}</h1>
        {isLoggedIn ? (<button onClick={() => setIsloggedIn(false)}>Logout</button>) :
        (<button onClick={() => setIsloggedIn(true)}>Login</button>)}
        
        
        </div>
    );
};
export default Header;