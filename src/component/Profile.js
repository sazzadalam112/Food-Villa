import { useState } from "react";

const Profile = (props) => {
  const [count,setCount] = useState(0);
 
 
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
