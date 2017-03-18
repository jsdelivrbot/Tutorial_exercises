/**
*
* @summary : Route componenet containing all application routes
*
*/

import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Application routes
import App from '../components/app';
import Location from '../container/locations/location';

//export application routes
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Location} />
  </Route>
)
