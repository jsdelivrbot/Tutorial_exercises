/**
*
* @summary : Main class containing all components
*
*/

import React, { Component } from 'react'

export default class App extends Component {

  render(){
    return(
      <div className="main-container">
        <section className="header-bar">
          <h2> suber estimation </h2>
        </section>
        <section className="main-content">
          {this.props.children}
        </section>
      </div>
    )}
}
