/**
*
*
* @class: Handle the signup form logic
*
*/

import React, { Component } from 'react';
import { hashHistory } from 'react-router';

// graphql modules
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// Custom modules
import AuthForm from './commons/authForm';

// define user signup and mutation
const mutateUserSignup = gql`
  mutation Signup($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id
      email
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

class SignupForm extends Component {

  // Set class state on initialization
  constructor(props) {
    super(props);
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
  _handleOnSubmit({ cbEmail, cbPassword }) {
    this.props.mutate({
      variables: { email: cbEmail, password: cbPassword },
      refetchQueries: [{ query: checkUserLoggedIn }]
    }).catch(res => {
       const errors = res.graphQLErrors.map(err => err.message);
       this.setState({ errors });
    })
  }

  // render signup form
  render() {
    return(
      <div>
        <h3> Signup form </h3>
        <AuthForm errors={this.state.errors} onSubmitCallback={this._handleOnSubmit.bind(this)}/>
      </div>
    )
  }

}

export default graphql(checkUserLoggedIn)(graphql(mutateUserSignup)(SignupForm));
