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
import Services from '../container/services/services';

//export application routes
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Location} />
    <Route path={'services/:userName'} component={Services} />
  </Route>
)
