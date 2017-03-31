//Import Modules
import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Import routes
import App from './components/app'
import Signin from './containers/signin'

export default (
  <Route path={'/'} component={App}>
    <Route path={'/signin'} component={Signin} />
  </Route>
)
