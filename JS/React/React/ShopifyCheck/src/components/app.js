/**
*
* @class : Main container for Shopify application
*
*/

//Application imports
import React, { Component } from 'react';


//Componet imports
import SearchBar from './SearchBar';



export default class App extends Component {

  //
  // Set state and bind class methods
  //
  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      songs: null
    };
    this._updateText = this._updateText.bind(this);
    this._getSongs = this._getSongs.bind(this);
  }

  //
  // Get songs from spotify API
  //
  _getSongs(){
    const { song } = this.state;
    console.log(`song is ${song}`);
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
    const { initialMessage, itemSelect } = this.state;
    return (
      <div>
        <SearchBar
          updateText={this._updateText}
          getSongs={this._getSongs}
          />
        <p>{itemSelect}</p>
        {initialMessage}
      </div>
    );
  }

}
