/**
*
* @summary       : Stateless search bar for user to enter genre type
* @dependencies  : (1) ./app.js
*
*/

import React, { PropTypes, Component } from 'react';
import styles from './searchbar.css';


const SearchBar = (props) => {

  //
  // Return text to container componenet
  //
  return(
      <section className={styles.root}>
        <input onChange={ (e) => props.updateText(e.target.value) }/>
        <button onClick={props.getSongs}> Get songs </button>
      </section>
  );

}

SearchBar.propTypes = { updateText: PropTypes.func };

export default SearchBar;
