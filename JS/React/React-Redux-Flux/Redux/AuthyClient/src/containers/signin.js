/**
 *
 *  @summary : Handle sign in logic to the application
 * 	@actions : (1) signinUserAction 
 *  @state   : (1) reduxForm
 *             (2) errorMessage           
 * 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form'
import { signinUser } from '../actions/index';

 class Signin extends Component {

   //Bind methods to class instance
   constructor(props){
     super(props);
     this._handleFormSubmit = this._handleFormSubmit.bind(this);
   }

   //Pass user data to signup action
   _handleFormSubmit({email,password}){
     if(email && password){
       this.props.signinUserAction({ email: email, password: password })
     }
   }

   //Render alert when invalid date entered
   _alertRender(){
     if(this.props.errorMessage){
       return(
         <div className="alert alert-danger">
            <strong> Invalid </strong>{this.props.errorMessage}
         </div>
       )
     }
   }

  //render form
  render(){

    const { handleSubmit } = this.props;

    return(
      <form className="signup-form"
            onSubmit={handleSubmit(this._handleFormSubmit)}>

        {/* Email field */}
        <fieldset className="form-group">
          <label> Email </label>
          <Field name="email"
                 type="email"
                 component={_renderInput}/>
        </fieldset>

        {/* Password field */}
        <fieldset className="form-group">
          <label> Password </label>
          <Field name="password"
                 type="password"
                 component={_renderInput}/>
        </fieldset>

        {/* Button and boolean alert */}
        {this._alertRender()}
        <button className="btn btn-primary" action="submit">Sign in</button>
      </form>
    )}

}

//Render input to form
const _renderInput = field => {
  const { input, type } = field;
  return(
    <div>
      <input {...input} type={type} className="formControl" />
    </div>
  )
}

//Map error state to component props
const mapStateToProps = reduxState => {
  return {
    errorMessage: reduxState.auth.error
  }
}

//Map dispatch actions to props
const mapDispatchToProps = dispatchEvent => ({
  signinUserAction: (user) => dispatchEvent(signinUser(user))
})


Signin = reduxForm({
  form: 'signin'
})(Signin)

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
