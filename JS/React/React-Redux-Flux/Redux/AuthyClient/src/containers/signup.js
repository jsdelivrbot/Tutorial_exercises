/**
 *
 *  @summary : User signup form
 * 	@state   :
 * 	@actions :
 *
 */

//Application modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form'
import { signupUser } from '../actions'

class Signup extends Component {

	//Bind class methods to object instantation
	constructor(props){
		super(props);
		this._handleFormSubmit = this._handleFormSubmit.bind(this);
	}

	//Render error alert if application encounters error with authorization
	_renderAlert(){
		return this.props.errorMessage ? returnErrorElement(this.props.errorMessage) : null;
	}

	//Pull form data from redux form object and pass to SignupUser action
	//creator
	_handleFormSubmit(formProps){
		const { email, password } = formProps;
		this.props.signupUserAction({ email, password });
	}

	render(){

		//Pull handleSubmit function passed by redux-form into props
		const { handleSubmit } = this.props;

		return(
			<Form onSubmit={handleSubmit(this._handleFormSubmit)}>

				{/* user imput fields */}
				<Field name="email" label="email" component={_renderInput} type="email" />
				<Field name="password" label="password" component={_renderInput} type="password" />
				<Field name="passwordConfirm" label="passwordConfirm" component={_renderInput} type="password" />

				{/* error & submit */}
				{this._renderAlert()}
				<button action="submit" className="btn btn-primary">Sign up </button>

			</Form>
		)
	}

}//end of signin class

//return error alert to component
const returnErrorElement = message => {
	return (
		<div className="alert alert-danger">
			<strong> No! </strong> {message}
		</div>
	)
}

//Run input fields through basic client validation
const validate = formProps => {
	const errors = {}
	const { password, passwordConfirm, email } = formProps;
	if(!email) errors.email = "Please enter an email";
	if(!password) errors.password = "Please enter a password"
	if(!passwordConfirm) errors.passwordConfirm = "Please enter confirmation password";
	if(password != passwordConfirm) errors.password = "Passwords do not match"
	return errors;
}

//Render redux form components and internal state object for elements
const _renderInput = ({label, type, input, meta: { error, touched }}) => {
	return (
		<div>
			<label>{label}:</label>
			<input {...input} type={type} className="form-control"/>
			{touched && error && <div className="error">{error}</div>}
		</div>
	)
}

//Map error state to component props
const mapStateToProps = reduxState => {
	return{
		errorMessage: reduxState.auth.error
	}
}

// Map user signup action to component props
const mapDispatchToProps = dispatchEvent => {
	return{
		signupUserAction: (signupDetails) => dispatchEvent(signupUser(signupDetails))
	}
}

//Configure redux form
Signup = reduxForm({
	form: 'signup',
	validate
})(Signup)

//export wrapped component
export default connect(mapStateToProps, mapDispatchToProps)(Signup)
