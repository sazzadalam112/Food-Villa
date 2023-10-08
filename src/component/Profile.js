import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count,setCount] = useState(0);
 
  useEffect( () => {
    const timer = setInterval(() => {
      console.log("Namaste Sazzad");
    }, 1000);
    console.log("useEffect");

    return () => {
      clearInterval(timer)
      console.log("useEffect return");
    };
  }, []);
  console.log("render");
 
  return (
   <div>
     <h1>This is my  ProfileFunctionalComponent</h1>
     <h3>Name: {props.name}</h3>
     <h3>Count: {count}</h3>
     <button onClick={() => {
      setCount(10);
     
     }}>Click me</button>
   
   </div>
   
    
  )
}

export default Profile;
