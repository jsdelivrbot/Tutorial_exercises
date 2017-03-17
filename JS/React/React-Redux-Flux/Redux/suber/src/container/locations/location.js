/**
*
* @summary : Provide end/start lat/lng for user to enter location details
*
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Location extends Component {

  render(){
    return(
      <section className="location-container">
        <h4> location component working </h4>
      </section>
    )}

}

export default connect()(Location);
