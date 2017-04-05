/**
 *
 *  @summary : Display header navigation links based on whether on the
 * 	           user is authenticated.s
 * 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  //Dependent on if authorized user render header links
  _renderLinks(){
    console.log('authenticated is' + this.props.authenticated)
    if(this.props.authenticated){
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout"> Sign out </Link>
        </li>
      )
    }
    else{
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link">Sign in </Link>
        </li>,
          <li className="nav-item" key={2}>
            <Link className="nav-link" to="/signup"> Signup </Link>
        </li>
      ]
    }
  }

  //Render header links
  render(){
    return(
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
          {this._renderLinks()}
        </ul>
      </nav>
    )
  }
}


//Map boolean authenticated variable back to state
const mapStateToProps = reduxState => {
  return{
    authenticated: reduxState.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
