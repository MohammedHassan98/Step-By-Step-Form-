import React, { Component } from 'react';
import RaiseButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem } from 'material-ui/List';

export class Confirm extends Component {

   continue = e => {
      e.preventDefault();
      this.props.nextStep();
   }

   back = e => {
      e.preventDefault();
      this.props.prevStep();
   }

   render() {
      const { values : {firstName,lastName,email,occupation,city,bio} }=this.props;
      
      return (
         <MuiThemeProvider>
            <React.Fragment>
               <AppBar title="Confirm User Data"/>

               <List>
                  <ListItem 
                  primaryText="First Name"
                  secondaryText = {firstName} />

                  <ListItem 
                  primaryText="Last Name"
                  secondaryText = {lastName} />

                  <ListItem 
                  primaryText="Email"
                  secondaryText = {email} />

                  <ListItem 
                  primaryText="Occupation"
                  secondaryText = {occupation} />

                  <ListItem 
                  primaryText="City"
                  secondaryText = {city} />

                  <ListItem 
                  primaryText="Bio"
                  secondaryText = {bio} />
               </List>

               <RaiseButton 
               label="Confirm"
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

export default Confirm;

