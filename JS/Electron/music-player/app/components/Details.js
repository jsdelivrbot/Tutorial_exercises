/******************************************************************************
* @description : Render current track playing
*******************************************************************************/

import React, { Component } from 'react';

const Details = (props) => {
    return(
      <div className="details">
        <h3>{props.title}</h3>
      </div>
    );
};

export default Details;
