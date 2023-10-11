import { useEffect, useState } from "react";
import Logo from "../assets/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";


 const Title = () => (
    <a href="/">
    <img
    className="h-28 p-2" 
    alt="logo" 
    src={Logo}
    />
    </a>
);

const Header = () => {
  const [isLoggedIn , setIsloggedIn] = useState(false)

  const isOnline = useOnline();
    return(
        <div className="flex justify-between bg-slate-500 shadow-sm">
            <Title />
           
             <div className="nav-items">
            <ul className="flex py-10">
                <li className="px-10"><Link to="/">Home</Link> </li>
                <li className="px-10"> <Link to="/about">About</Link></li>
                <li className="px-10"><Link to="/contact">Contact</Link></li>
                <li className="px-10">Cart</li>
                <li className="px-10"><Link to="/instamart">Instamart</Link></li>
            </ul>
        </div>
        <h1>{isOnline? "✅":"🔴"}</h1>
        {isLoggedIn ? (<button onClick={() => setIsloggedIn(false)}>Logout</button>) :
        (<button onClick={() => setIsloggedIn(true)}>Login</button>)}
        
        
        </div>
    );
};
export default Header;