/**
*
*
* @class: Handle logic for
*
*/

// import react components
import React, { Component } from 'react';
import { Link } from 'react-router';

// import graphql components
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// Query DB for user credentials
const QueryForUserLoggedIn = gql`
{
	currentUser{
    email
    id
  }
}`

// Call grapgql mutate state
const mutateUserLogout = gql`
mutation {
	logout {
    id
    email
  }
}`

class Header extends Component {

  //
  // Call mutate statement to log user out server side
  // and call new buttons
  //
  _handleLogout() {

		// call the mutate function on props and refetch the
		// query to update state
    this.props.mutate({
      refetchQueries: [{ query: QueryForUserLoggedIn }]
    });

	}

  //
  // Render the header authorization buttons based on
  // whether the user is logged in or out
  //
  _renderAuthButtons() {

    const { currentUser } = this.props.data;

    if(this.props.data.currentUser != null) {
      return(
        <li>
          <Link onClick={this._handleLogout.bind(this)}>Logout</Link>
        </li>
      )
    } else {
      return (
        <div>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </div>
      )
    }
  }


  //
  // Render header area
  //
  render() {

		// Return loading if query has not completed
		// executing
    if(this.props.data.loading) {
      return ( <div><p>Loading...</p></div> );
    }

    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">Home</Link>
          <ul className="right">
            {this._renderAuthButtons()}
          </ul>
        </div>
      </nav>
    )

  }

}

export default graphql(mutateUserLogout)(graphql(QueryForUserLoggedIn)(Header));
