/**
*
* @summary       : Stateless search bar for user to enter genre type
* @dependencies  : (1) ./app.js
*
*/

import React, { PropTypes, Component } from 'react';


const SearchBar = (props) => {

  //
  // Return text to container componenet
  //
  return(
      <section className='search_bar'>
        <input onChange={ (e) => props.updateText(e.target.value) }/>
        <button onClick={props.getSongs}> Get songs </button>
      </section>
  );

}

SearchBar.propTypes = { updateText: PropTypes.func };

export default SearchBar;
