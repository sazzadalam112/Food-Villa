 import React from "react"
 class Profile extends React.Component {
  constructor(props) {
    super(props);
    //create state 
     this.state = {
      UserInfo: {
      name: "",
      location: "", 
      },
    };
    console.log("child - constructor")
    }
    async componentDidMount() {

      const data = await fetch("https://api.github.com/users/sazzadalam112")
      const json = await data.json();
      console.log(json);
      this.setState({
      UserInfo:json,
    });
      console.log("child - componentDidMount" + this.props.name);
    }
    componentDidUpdate () {
      console.log("Component Did Update");
    }
    componentWillUnmount() {
      console.log("unmounting");
    }
  render() {
    const {count} = this.state;
      console.log("child-render"); 
    return(
      
      <div>
        <h1>Profile class component</h1>
         <img src={this?.state?.UserInfo?.avatar_url} />
         <h3>Name:{this?.state?.UserInfo?.name}</h3>
         <h3>Location:{this?.state?.UserInfo?.location}</h3>
         
       </div>
     
    )
  }
 }
 export default Profile;