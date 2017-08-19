import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// define the query to check whether a current user is
// logged in or not
const checkUserLoggedIn = gql`
{
  currentUser{
    email
    id
  }
}`;

export default (WrappedComponent) => {

  class RequireAuth extends Component {

    componentWillUpdate(nextProps) {
      if(!nextProps.data.loading && !nextProps.data.currentUser) {
        alert('You do not have access to this area')
        hashHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(checkUserLoggedIn)(RequireAuth)

}
