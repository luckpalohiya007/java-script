import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';
//import Loginscreen from './Loginscreen';
const axInstance = axios.create({
  baseURL : 'http://localhost:3001/user/'
})

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name: '',
      last_name: '',
            email: '',
            password: '',
            //confirm: '',
      //passwordConf:''
    }
  }
  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }
  handleClick(event){
    //var apiBaseUrl = "http://localhost:3002/user/";
    // console.log("values in register handler",role);
    var self = this;
    //To be done:check for empty values before hitting submit
    if(this.state.first_name.length>0 && this.state.last_name.length>0 && this.state.email.length>0 && this.state.password.length>0){
      var payload={
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
     // "last_name":this.state.last_name,
      "email":this.state.email,
      "password":this.state.password,
     // "confirm":this.state.confirm,
      //"passwordConf":this.state.passwordConf
      //"role":role
      }
      axInstance.post( 'signup', payload)
     .then(function (response) {
       console.log(response);
       if(response.data.success){
        // if(this.state.email != response.data.email){
          console.log("registration successfull");
         var loginscreen=[];
         loginscreen.push(<Login parentContext={this} appContext={self.props.appContext} />);
         var loginmessage = "Not Registered yet.Go to registration";
         self.props.parentContext.setState({loginscreen:loginscreen,
         loginmessage:loginmessage,
         buttonLabel:"Register",
         isLogin:true 
         
          });  
        //}
       }
       else{
         console.log("some error ocurred",response.data.success);
       }
     })
     .catch(function (error) {
       console.log(error);
     });
    }
    else{
      alert("Input field value is missing");
    }

  }
  render() {
    // console.log("props",this.props);
   
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(e) => this.setState({first_name:e.target.value})}
             />
           
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(e) => this.setState({last_name:e.target.value})}
             />
           
           <br/>
           <TextField
             hintText="Enter your Student Id"
             floatingLabelText="Student Id"
             onChange = {(e) => this.setState({email:e.target.value})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(e) => this.setState({password:e.target.value})}
             />
           <br/>
           
           
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Register;