//Import Modules
import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Import routes
import App from './components/app'
import Signin from './containers/signin'
import Signout from './containers/signout';
import Signup from './containers/signup';
import Feature from './components/feature';
import Splash from './components/splash';

//Import middleware
import RequireAuth from './components/hoc/require_auth';

//Route paths
export default (
  <Route path={'/'} component={App}>
    <IndexRoute component={Splash}/>
    <Route path={'/signup'} component={Signup}/>
    <Route path={'/signin'} component={Signin} />
    <Route path={'/signout'} component={Signout}/>
    <Route path={'/feature'} component={RequireAuth(Feature)}/>
  </Route>
)
