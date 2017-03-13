/**
*
* @class : Main container for Spotify application
*
*/

//Application imports
import React, { Component } from 'react';
import styles from './app.css';

//Component imports
import SearchBar from './SearchBar/SearchBar';
import SongItem from './SongItem/songItem';
import ReturnSongs from '../utils/returnSongs';
import SongList from './SongList/songlist';


export default class App extends Component {

  //
  // Set state and bind class methods
  //
  constructor(props) {
    super(props);

    this.state = {
      initialMessage: 'greeting',
      songs: '',
      tracks: {},
      songPosition: 0
    };

    this._updateText = this._updateText.bind(this);
    this._getSongs = this._getSongs.bind(this);
    this._selectSong = this._selectSong.bind(this);
  }

  //
  // Return songs from spotify API utils promise
  //
  _getSongs(){
    const { song } = this.state;
    ReturnSongs(song)
        .then(( {tracks} ) => {
          this.setState({ tracks });
        })
  }

  //
  // Mutate container state based on value returned from
  // child component SearchBar.js
  //
  _updateText(value){
    this.setState({
      itemSelect: value,
      song: value
    })
  }

  //
  // Receive selected index from SongList component
  //
  _selectSong(songPosition){
    console.log(songPosition);
    this.setState({ songPosition })
  }


  //
  // Render application components
  //
  render() {

    //Destructure componenet state
    const { initialMessage, itemSelect, tracks, songPosition } = this.state;

    return (
      <div className={styles.root}>

        {/* Header /searchbar */}
        <SearchBar
          updateText={this._updateText}
          getSongs={this._getSongs} />

        {/* Conditional tracks */}
        { tracks.items && <SongItem
                              songData={tracks.items[songPosition]} /> }

        {/* song playlist */}
        { tracks.items && <SongList
                              songArray={tracks.items}
                              selectSong={this._selectSong} /> }

      </div>
    );
  }

}
