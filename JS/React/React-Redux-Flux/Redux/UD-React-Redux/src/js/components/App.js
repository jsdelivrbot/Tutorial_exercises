import React, { Component } from 'react';

//Import BookList (Promoted Redux container)
import BookList from '../containers/Container_BookList';
import BookDetail from '../containers/Container_bookDetail';

export default class App extends Component {
  render(){
    return(
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
