import React, { Component } from 'react';
import RaiseButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

export class formUserDetalis extends Component {

   continue = e => {
      e.preventDefault();
      this.props.nextStep();
   }
   render() {
      const { values , handleChange }=this.props;
      
      return (
         <MuiThemeProvider>
            <React.Fragment>
               <AppBar title="Enter User Detalis"/>

               <TextField 
               hintText ="Entre Your First Name"
               floatingLabelText = "First Name"
               onChange ={handleChange("firstName")}
               defaultValue = {values.firstName}/>
               <br/>

               <TextField 
               hintText ="Entre Your Last Name"
               floatingLabelText = "Last Name"
               onChange ={handleChange("lastName")}
               defaultValue = {values.lastName}/>
               <br/>

               <TextField 
               hintText ="Entre Your Email"
               floatingLabelText = "Email"
               onChange ={handleChange("email")}
               defaultValue = {values.email}/>
               <br/>

               <RaiseButton 
               label="Continue"
               primary={true} 
               style = {styles.button} 
               onClick={this.continue} />
            </React.Fragment>
         </MuiThemeProvider>
      )
   }
}

const styles = {
   button : {
      margin:"15"
   },
   appbar : {
      display :"flex",
      flexDirection: "column",
      alignItems : "center",
      justifyContent : "center"
   }
}

export default formUserDetalis;
