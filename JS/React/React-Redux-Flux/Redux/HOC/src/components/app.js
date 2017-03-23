/**
*
* @summary : Main class containing all components
*
*/

import React, { Component } from 'react'


import Header from './header';

export default class App extends Component {

  render(){
    return(
      <section className="main-wrapper">
        <Header />
        {this.props.children}
      </section>
    )}

}

