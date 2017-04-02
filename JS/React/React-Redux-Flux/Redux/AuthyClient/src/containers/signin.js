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

  //render form
  render(){

    const { handleSubmit } = this.props;

    return(
      <form className="signup-form"
            onSubmit={handleSubmit(this._handleFormSubmit)}>
        <fieldset className="form-group">
          <label> Email </label>
          <Field name="email"
                 type="email"
                 component={_renderInput}/>
        </fieldset>
        <fieldset className="form-group">
          <label> Password </label>
          <Field name="password"
                 type="password"
                 component={_renderInput}/>
        </fieldset>
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

//map state to props
const mapStateToProps = reduxState => {
  return {
    errorMessage: reduxState.form
  }
}

//map dispatch actions to props
const mapDispatchToProps = dispatchEvent => ({
  signinUserAction: (user) => dispatchEvent(signinUser(user))
})

Signin = reduxForm({
  form: 'signin'
})(Signin)

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
