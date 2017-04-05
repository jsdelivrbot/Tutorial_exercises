import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

class Signout extends Component {

	//Dispacth action to change boolean authenticated
	componentWillMount(){
		this.props.signOutAction
	}

	//Render sign out page
	render(){
		return(
			<div>
				<h2>Logged out</h2>
			</div>
		)
	}
}

//Map signoutAction to signout container
const mapDispatchToProps = dispatchEvent => {
	return{
		signOutAction: dispatchEvent(signoutUser()) 
	}
}

//Wire container up to redux store
export default connect(null, mapDispatchToProps)(Signout)