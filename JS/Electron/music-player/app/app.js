/******************************************************************************
* @description : Main base component for application
*******************************************************************************/

"use strict";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Application componenets
import Search from './components/Search';
import Details from './components/Details';
import Player from './components/Player';
import Progress from './components/Progress';

class App extends Component {

  render(){
    return(
      <div>
        <Search />
        <Details title={'Test-Track'} />
        <Player />
        <Progress
          position={'0.3'}
          elapsed={'00;00'}
          total={'0:40'}/>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('content'));
