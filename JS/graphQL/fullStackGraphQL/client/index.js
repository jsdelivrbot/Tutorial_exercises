/**
*
*
* @summary: Handle binding React to HTML
*
*/

// import React modules
import React from 'react';
import ReactDOM from 'react-dom';

// import React Router
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

// Import Apollo modules
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

// Allow Apollo to internally assign
const customNetworkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
})

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  networkInterface: customNetworkInterface
});

// import route components
import App from './components/app';
import LoginForm from './components/login';
import SignupForm from './components/SignupForm';
import Dashboard from './components/dashboard';
import requireAuth from './components/requireAuth';

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/dashboard" component={requireAuth(Dashboard)}/>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
