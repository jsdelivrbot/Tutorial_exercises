//React modules
import React, { Component } from 'react';

//Application modules
import Header from './header'


export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        {this.props.children}
      </div>  
    );
  }
}
