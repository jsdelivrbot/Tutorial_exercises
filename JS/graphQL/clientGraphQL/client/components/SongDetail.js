/**
*
*
* @class: Render detail card for a single song
*
*/

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

// Component Queries
import FetchSingleSongQuery from '../queries/fetchSingleSong';

class SongDetail extends Component {

  /**
  *
  * @method: Render single song inner title
  *
  */
  _renderSong() {
    const { song } = this.props.data;
    return (
      <div className="innner-card">
        <h3>{song.title}</h3>
      </div>
    )

  }

  /**
  *
  * @method: Render song selected in the req params
  *
  */
  render() {

    if (this.props.data.loading) {
      return <h3> Loading... </h3>
    }

    return (
      <div className="song-detail-wrapper">
        <Link to="/">Back</Link>
        <div className="card"> {this._renderSong()} </div>
        <LyricList lyrics={this.props.data.song.lyrics}/>
        <LyricCreate songID={this.props.data.song.id}/>
      </div>
    )
  }

}

export default graphql(FetchSingleSongQuery, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
