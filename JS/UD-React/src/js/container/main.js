/* React imports
===============*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

/* Application components
========================*/
import TestComponent from '../components/TestComponent';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';

/* Private config
================*/
import config from '../../../private/config';

/* API Imports
=============*/
YTsearch({key: config.yt_key, term: 'antarctica'}, (data) => {
  console.log(data);
});

/* Class
=======*/

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      returnedVideos: []
    };
    this.renderDefaultVideos();
  }

  renderDefaultVideos(){
    YTsearch({key: config.yt_key, term: 'JavaScript'}, (tubeClips) => {
      this.setState({
        returnedVideos: tubeClips
      });
    });
  }

  render(){

    if( !this.state.returnedVideos.length > 1 ){
      return(
        <div>
          <h1> Null </h1>
        </div>
      );
    }
    else {
      return(
        <div className="main-container">
          <SearchBar />
          <VideoList
            videos={this.state.returnedVideos}
          />
        </div>
      );
    }
  }

}


export default Main;
