import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile"
import Profile from "./ProfileClass";
import React from "react";
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
        <p>
           
            This is the Namaste React Live Course Chapter 07 - Findingg page path🚀 
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
