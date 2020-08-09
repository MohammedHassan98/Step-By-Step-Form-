import React, { Component } from 'react';
import RaiseButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

export class formPersonalDetalis extends Component {

   continue = e => {
      e.preventDefault();
      this.props.nextStep();
   }

   back = e => {
      e.preventDefault();
      this.props.prevStep();
   }

   render() {
      const { values , handleChange }=this.props;
      
      return (
         <MuiThemeProvider>
            <React.Fragment>
               <AppBar title="Enter Personal Detalis"/>

               <TextField 
               hintText ="Entre Your Occupation"
               floatingLabelText = "Occupation"
               onChange ={handleChange("occupation")}
               defaultValue = {values.occupation}/>
               <br/>

               <TextField 
               hintText ="Entre Your City"
               floatingLabelText = "City"
               onChange ={handleChange("city")}
               defaultValue = {values.city}/>
               <br/>

               <TextField 
               hintText ="Entre Your Bio"
               floatingLabelText = "Bio"
               onChange ={handleChange("bio")}
               defaultValue = {values.bio}/>
               <br/>

               <RaiseButton 
               label="Continue"
               primary={true} 
               style = {styles.button} 
               onClick={this.continue} />
               <br/>

               <RaiseButton 
               label="Back"
               primary={false} 
               style = {styles.button} 
               onClick={this.back} />

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

export default formPersonalDetalis;

