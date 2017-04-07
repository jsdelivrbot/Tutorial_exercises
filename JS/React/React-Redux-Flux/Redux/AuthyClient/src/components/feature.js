/**
 *
 *  @summary : [ Authorized ] - User details route
 *  @actions : (1) fetchUserData
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from '../actions';

class Feature extends Component {

  //Attempt to access authorized server route
  componentWillMount(){
    this.props.fetchMessageAction()
  }

  //Render user details page
  render(){
    return(
      <section className="feature-wrapper">
        <h1> {this.props.message} </h1>
        <ul>
          <li>Int 1</li>
          <li>Int 2</li>
        </ul>
      </section>
    )
    }

}//end of class

//Map state to props
const mapStateToProps = reduxState => {
  return {
    message: reduxState.auth.message
  }
}

//Map dispatch actions
const mapDispatchToProps = dispatchEvent => {
  return {
    fetchMessageAction: dispatchEvent(fetchUserData)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feature);
