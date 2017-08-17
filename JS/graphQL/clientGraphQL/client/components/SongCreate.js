/**
*
* @class:
*
*/

import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router';

import query from '../queries/fetchSongs';

class SongCreate extends Component {

  /**
  *
  * @constructor: Define basic
  *
  */
  constructor(props) {
    super(props);
    this.state = { title: '' }
  }

  /**
  *
  * @method: hook into mutate function and send
  * the data
  *
  */
  _handleSubmit(e) {
    e.preventDefault();

    // set the title varibale for for grapgql
    // query and push user back to main on
    // query exectuion
    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{ query: query }]
    }).then(() => hashHistory.push('/'));

  }

  /**
  *
  * @method: Render add song form
  *
  */
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3> Create a new song</h3>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <label> Song Title </label>
          <input
            onChange={event => this.setState({ title: event.target.value})}
            value={this.state.input}/>
        </form>
      </div>
    )
  }

}

// create mutation with query varibales
const mutation = gql`
mutation AddSong($title:String){
  addSong(title: $title) {
    title
  }
}
`;

export default graphql(mutation)(SongCreate)
