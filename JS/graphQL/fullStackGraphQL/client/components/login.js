/**
*
*
* @summary: Hande logic for user signin to the application
*
*/

// import react modules
import React, { Component } from 'react';
import { hashHistory } from 'react-router';

// import custom modules
import AuthForm from './commons/AuthForm';

// import graphql
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// define the mutation to log user into the application
const LoginUserMutation = gql`
mutation login($email: String, $password: String) {
  login(email:$email, password: $password){
    email
    id
  }
}`;

// define the query to check whether a current user is
// logged in or not
const checkUserLoggedIn = gql`
{
	currentUser{
    email
    id
  }
}`;

class Login extends Component {

  // handle payment
  constructor() {
    super();
    this._handleUserSubmit = this._handleUserSubmit.bind(this);
    this.state = {
      errors: []
    }
  }

  // check the query to see if the currentUser
  // object has been populated
  componentWillUpdate(nextProps) {
    if( !this.props.data.currentUser && nextProps.data.currentUser){
      hashHistory.push('/dashboard');
    }
  }

  // call graphql mutate function with AuthForm
  // fields and rerun checkUserLoggedIn query to
  // update apollo state -
  // [ IMPORTANT!! ] We can chain a catch statement as all
  // graphql commands return a promise!!
  _handleUserSubmit({ cbEmail, cbPassword }) {
    console.log('in the sbit - cbemail is ' + cbEmail + ' and cbpasswird is ' + cbPassword)
    this.props.mutate({
      variables: { email: cbEmail, password: cbPassword },
      refetchQueries: [{ query: checkUserLoggedIn }]
    }).catch(res => {
       const errors = res.graphQLErrors.map(err => err.message);
       this.setState({ errors });
    })
  }


  // Render the login form
  render() {
    return(
      <div>
        <h3> Login </h3>
        <AuthForm onSubmitCallback={this._handleUserSubmit} errors={this.state.errors} />
      </div>
    )
  }

}

export default graphql(checkUserLoggedIn)(graphql(LoginUserMutation)(Login));
