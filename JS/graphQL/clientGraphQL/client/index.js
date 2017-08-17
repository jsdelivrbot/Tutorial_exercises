import './style/style.css';

//React modules
import React from 'react';
import ReactDOM from 'react-dom';

// React router
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Apollo modules
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

// Application components
import SongList from './components/SongList';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

//create new instance and pass to apollo provider
// add hook to add id field to each piece of data
const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

//wrap main component in apollo provider
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="song/new" component={SongCreate} />
          <Route path="/song/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
