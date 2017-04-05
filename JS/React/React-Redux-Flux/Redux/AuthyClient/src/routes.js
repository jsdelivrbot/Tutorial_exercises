//Import Modules
import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Import routes
import App from './components/app'
import Signin from './containers/signin'
import Signout from './containers/signout';

//Route paths
export default (
  <Route path={'/'} component={App}>
    <Route path={'/signup'} component={Signin}/>
    <Route path={'/signin'} component={Signin} />
    <Route path={'/signout'} component={Signout}/>
  </Route>
)
