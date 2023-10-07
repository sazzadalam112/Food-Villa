import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile"
import Profile from "./ProfileClass";

const About = () => {
  return (
    <div>
        <h1>About Us page</h1>
        <p>
           
            This is the Namaste React Live Course Chapter 07 - Findingg page path🚀 
            </p>
            <Profile name = {"Chote"} xyz ={"SDKDDF"}/>
            <ProfileFunctionalComponent name = {"Sazzad"}/>
           
            
            
    </div>
  )
}
export default About;
