/**
*
* @class : Main container for Shopify application
*
*/

//Application imports
import React, { Component } from 'react';
import styles from './app.css';

//Component imports
import SearchBar from './SearchBar/SearchBar';
import SongItem from './SongItem/songItem';
import ReturnSongs from '../utils/returnSongs';


export default class App extends Component {

  //
  // Set state and bind class methods
  //
  constructor(props) {
    super(props);

    this.state = {
      initialMessage: 'greeting',
      songs: '',
      tracks: {}
    };

    this._updateText = this._updateText.bind(this);
    this._getSongs = this._getSongs.bind(this);
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
  // Render application components
  //
  render() {
    const { initialMessage, itemSelect, tracks } = this.state;

    return (
      <div className={styles.root}>

        <p>{itemSelect}</p>

        <SearchBar
          updateText={this._updateText}
          getSongs={this._getSongs}
          />

        { tracks.items && <SongItem songData={tracks.items[0]}/> }


      </div>
    );
  }

}
