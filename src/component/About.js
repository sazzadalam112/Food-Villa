import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile"
import Profile from "./ProfileClass";
import React from "react";
import UserContext from "../Utils/Usercontex";
// import { Component } from "react";

class About extends React.Component{
  constructor(props) {
   super(props);

    // console.log("Parent-constructor")
  }
   componentDidMount() {
    
    // console.log("parent-componentDidMount")
  }
  render() {
    // console.log("parent-render")
    return(
      <div>
        <h1>About Us page</h1>
        <UserContext.Consumer>
          {({user}) => <h4 className="p-4 m-4 font-bold text-2xl">{user.name}-{user.email}</h4>}
        </UserContext.Consumer>
        <p> This is the Namaste React Live Course Chapter 07 - Findingg page path🚀 
            </p>
            <Profile name = {""} />
            {/* <Profile name1 = {"Sazzad"}/> */}
            {/* <ProfileFunctionalComponent />
           */}
           
            
            
    </div>
    )
  }
}

export default About;
