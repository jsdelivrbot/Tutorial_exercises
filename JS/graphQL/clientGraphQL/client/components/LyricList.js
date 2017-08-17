/**
*
*
* @class: Render all lyrics for selected song and behavoiur
* logic to like song
*
*/

import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

// Define mutation to like an individual lyric
const mutation = gql`
mutation LikeLyric($id: ID) {
  likeLyric(id: $id) {
    id
    likes
  }
}
`;

class LyricList extends Component {

  /**
  *
  * @method: Render all lyrics held for particular song
  *
  */
  _renderSongLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i className="material-icons"
               onClick={() => this._onLike(id,likes) }>thumb_up
            </i>
            {likes}
          </div>
        </li>
      )
    })
  }

  /**
  *
  * @method: Send graphQL mutation to like individual lyric
  *
  */
  _onLike(songID, currentNoOfLikes) {
    this.props.mutate({
      variables: { id: songID },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id: songID,
          __typename: 'LyricType',
          likes: currentNoOfLikes + 1
        }
      }
    });
  }

  /**
  *
  * @method:
  *
  */
  render() {
    return (
      <ul className="collection">
        {this._renderSongLyrics()}
      </ul>
    )
  }
}


export default graphql(mutation)(LyricList)
