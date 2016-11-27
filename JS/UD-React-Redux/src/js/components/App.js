import React, { Component } from 'react';

import BookList from '../containers/Container_BookList';

export default class App extends Component {
  render(){
    return(
      <div>
        <BookList />
      </div>
    );
  }
}
