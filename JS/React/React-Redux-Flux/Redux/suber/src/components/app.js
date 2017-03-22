/**
*
* @summary : Main class containing all components
*
*/

import React, { Component } from 'react'
import styles from './app.css';

export default class App extends Component {

  render(){
    return(
      <div className="main-container">
        <section>
          <h2 className={styles.headerBar}> suber estimation </h2>
        </section>
        <section className="main-content">
          {this.props.children}
        </section>
      </div>
    )}
}
