/**
*
* @summary : Route componenet containing all application routes
*
*/

import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Application routes
import App from '../components/app';
import Header from '../container/header';
import Resources from '../components/resources';

//export application routes
export default (
  <Route path="/" component={App}>
    <Route path="resources" component={Resources} />
  </Route>
)
