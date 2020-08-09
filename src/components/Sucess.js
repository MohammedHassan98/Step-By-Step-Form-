import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default function Sucess() {
   return (
      <MuiThemeProvider>
            <React.Fragment>
               <AppBar title="Success"/>
               <h1>Thank You For Your Submission</h1>
               <p>You Will Get An Email Soon ....</p>
            </React.Fragment>
      </MuiThemeProvider>
   )
}


