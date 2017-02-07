/******************************************************************************
* @description : Current song progress and time info
*******************************************************************************/


import React, { Component } from 'react';

export default class Progress extends Component {

  render(){
    return(
      <section className="progress">
        <span className="player__time-elasped">
          {this.props.time}
        </span>
        <progress
          value={this.props.position}
          max="1">
        </progress>
        <span className="player__time-total">
          {this.props.total}
        </span>
      </section>
    );
  }

}
