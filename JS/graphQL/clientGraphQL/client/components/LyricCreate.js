/**
*
*
* @class Component to add lyric and call GraphQL mutation to add song
*
*/

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// Define Add lyric mutation to bind to application
const mutation = gql`
  mutation AddLyric($content: String, $id : ID) {
    addLyricToSong(content: $content, songId: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

class Lyric extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  /**
  *
  * @method: Handle form submit by calling mutate on
  *
  */
  _handleSubmit(e) {
    e.preventDefault();
    this.props.mutate({
      variables: { content: this.state.content, id: this.props.songID }
    }).then(() => alert('Lyric added to DB'));
    this.setState({ content: '' })
  }

  /**
  *
  * @method: Render Lyric creation component
  *
  */
  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <label> Add a Lyric </label>
        <input
          value={this.state.content}
          onChange={(e) => this.setState({ content: e.target.value })}
        />
      </form>
    );
  }
}

export default graphql(mutation)(Lyric);
