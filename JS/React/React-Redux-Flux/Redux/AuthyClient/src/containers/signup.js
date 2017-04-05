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
import { reduxForm } from 'redux-form'

class Signup extends Component {

	//Render error alert if application encounters error with authorization
	_renderAlert(){
		return this.props.errorMessage ? returnErrorElement(this.props.errorMessage) : null; 
	}

	render(){
		const { handleSubmitAction } = this.props;
		return(
			<Form onSubmit={/* Need to add action handler */}>
				
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
			<strong> No! </strong> message
		</div>
	)
} 

//Run input fields through basic client validation
const validate = formprops => {
	const errors = {}
	const { password, passwordConfirm, email } = formProps;
	if(!email) errors.email = "Please enter an email";
	if(!password) errors.password = "Please enter a password"
	if(!passwordConfirm) errors.passwordConfirm = "Please enter confirmation password";
	if(password != passwordConfirm) errors.password = "Passwords do not match"
}

//Render redux form compoenents
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

// <-- Need to add action dispatcher
const mapDispatchToProps = dispatch => {
	//return form submits
}

//Configure redux form 
Signup = reduxForm({
	form: 'signup',
	validate
})(Signup)

//export wrapped component
export default connect()(Signup)

