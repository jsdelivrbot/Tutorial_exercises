/**
*
* @summary : Header component displaying application link buttons
*
*/

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { authenticate } from '../actions/action';

class Header extends Component {

	//Authentication button - mimic log in/out state
	_authButton(){
		if(this.props.authenticated){
			return <button onClick={ ()=> this.props.changeAuthentication(false) }>Sign out </button>
		}
		return <button onClick={ ()=> this.props.changeAuthentication(true) }>Sign in </button>	
	}

	//render basic navigation header
	render(){
		return (
			<section className="header-wrapper">
				<nav className="navbar navbar-light">
					<ul className="nav navbar-nav">
						<li className="nav-item"><Link to="/">Home</Link></li>
						<li className="nav-item"><Link to="/resources">Resources</Link></li>
						<li className="nav-item">{this._authButton()}</li>
					</ul>
				</nav>
			</section>
		)
	}
}

//Object to show up as props in component 
const mapStateToProps = (reduxState) => {
	return{
		authenticated: reduxState.reduxAuthentication
	}
}

//Map dispactch action to props
const mapDispatchToProps = (dispatchEvent) => {
	return {
		changeAuthentication: (isLoggedIn) => dispatchEvent(authenticate(isLoggedIn))
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Header)
