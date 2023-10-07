 import React from "react"
 class Profile extends React.Component {
  constructor(props) {
    super(props);
    //create state 
    this.state = {
      count: 0,
      count2: 10,
    };
    console.log("constructor")
    }
    componentDidMount() {
      console.log("componentDidMount")
    }
  render() {
    const {count} = this.state;
      console.log("render"); 
    return(
      <div>
         <h1>Profile class component</h1>
         <h3>Name:{this.props.name}</h3>
         <h3>Name:{this.props.xyz}</h3>
         <h2>Count: {count}</h2>
        <button
        onClick={() => {
          this.setState({
            count:1,
          }) 
        }}
        >Setcount</button>
      </div>
     
    )
  }
 }
 export default Profile;