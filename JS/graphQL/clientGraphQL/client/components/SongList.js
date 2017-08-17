import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'
import { Link } from 'react-router';

// Queries external
import query from '../queries/fetchSongs';

// mutation
const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

class SongList extends Component {

  /**
  *
  * @method: Render list of song titles from apollo store
  *
  */
  _renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li className="collection-item" key={song.id}>
          <Link to={`song/${song.id}`}>{song.title}</Link>
          <i className="material-icons" onClick={() => this._handleDeleteSong(song.id)}>delete</i>
        </li>
      )
    });
  }

  /**
  *
  * @method: Check whether the user wants to delete the song account and
  * run the mutation query if so
  *
  */
  _handleDeleteSong(id) {
    if(confirm('Are you sure you want to delete this record?')) {
      this.props.mutate({ variables: { id } })
                .then(() => this.props.data.refetch());
    }
  }

  /**
  *
  * @method: Render list songs from apollo store data on the
  * props
  *
  */
  render() {

  // return loading page if data has not loaded yet
  if (this.props.data.loading) {
    return ( <div> Loading </div> )
  }

    return (
      <div className="song-list-wrapper">
        <ul className="collection">
          {this._renderSongs()}
        </ul>
        <Link to="/song/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }

}

export default graphql(mutation)(graphql(query)(SongList))
