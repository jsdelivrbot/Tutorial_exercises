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


export default (
  <Route path={'/'} component={App}>
    <Route path={'locations'} component={Location} />
  </Route>
)
