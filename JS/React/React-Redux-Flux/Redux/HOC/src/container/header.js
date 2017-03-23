/**
*
* @summary : Header component displaying application link buttons
*
*/

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/action';

class Header extends Component {

	//Authentication button - mimic log in/out state
	_authButton(){
		let text = ''
		const { authenticated } = this.props;
		authenticated ? text = 'sign out' : text = 'Sign in';
		reverseAuth = !authenticated; 
		return(
			<button
				onClick={()=> this.props.authenticate(reverseAuth)}	> 
				{text} 
			</button>
		)
	}

	//render basic navigation header
	render(){
		return(
			<section className="header-wrapper">
				<nav className="navbar navbar-light">
					<ul className="nav navbar-nav">
						<li className="nav-item"><Link to="/home">Home</Link></li>
						<li className="nav-item"><Link to="/member">Member Area</Link></li>
						<li className="nav-item">{this._authButton()}</li>
					</ul>	
				</nav>
			</section>
		)
	}
}

const mapStateToProps = (reduxState) => {
	return{
		authenticated: reduxState.authenticated
	}
}

export default connect(mapStateToProps)(Header)
