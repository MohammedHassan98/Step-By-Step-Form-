import React, { Component } from 'react';
import FormUserDetalis from './formUserDetalis';
import FormPersonalDetails from './formPersonalDetalis';
import Confirm from'./Confirm';
import Sucess from'./Sucess';

export class userForm extends Component {

   state = {
      step : 1 , 
      firstName : "",
      lastName : "",
      email : "",
      occupation : "",
      city : "",
      bio : ""
   }

   //Proceed to next step
   nextStep = () => {
      const { step } = this.state;
      this.setState({
         step : step+1
      });
   }

   //Go back to prev step
   prevStep = () => {
      const { step } = this.state;
      this.setState({
         step : step-1
      });
   }

   //Handle fields change 
   handleChange = input => e => {
      this.setState({[input] : e.target.value });
   }

   render() {
      const { step,firstName,lastName,email,occupation,city,bio } = this.state;
      var values = { firstName,lastName,email,occupation,city,bio } 

      switch(step){
         case 1 : 
            return (
               <FormUserDetalis 
               nextStep={this.nextStep}
               handleChange ={this.handleChange}
               values={values} 
               />
            );
         case 2 : 
            return (<FormPersonalDetails 
               nextStep={this.nextStep}
               handleChange ={this.handleChange}
               values={values}
               prevStep = {this.prevStep} />)
         case 3 :
            return (<Confirm 
               nextStep={this.nextStep}
               values={values}
               prevStep = {this.prevStep}/>)
         case 4 :
            return (<Sucess />)
      }
   }
}

export default userForm;
