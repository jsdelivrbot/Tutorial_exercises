/* React imports
===============*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import _ from 'lodash';

/* Application components
========================*/
import TestComponent from '../components/TestComponent';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

/* Private config
================*/
import config from '../../../private/config';


/* Class
=======*/

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      returnedVideos: [],
      selectedVideo: null
    };
    this.renderVideos('JavaScript');
  }

  renderVideos(subject){
    YTsearch({key: config.yt_key, term: subject}, (tubeClips) => {
      this.setState({
        returnedVideos: tubeClips,
        selectedVideo: tubeClips[0]
      });
    });
  }

  /**
  * @return Main application dependent on whether YT request for videos
  *         successful. If not, page null.
  */
  render(){

    if( !this.state.returnedVideos.length > 1 ){
      return(
        <div>
          <h1> Null </h1>
        </div>
      );
    }
    else {

      //Throttle video update via search bar with lodash debounce
      const searchDelay = _.debounce((subject) => {
        this.renderVideos(subject)
      },300);

      return(
        <div className="main-container">
          <SearchBar passToMainComponent={searchDelay}/>
          <VideoDetail
            video={this.state.selectedVideo}
            />
          <VideoList
            videos={this.state.returnedVideos}
            passSelectedVideoToMain={vidSelected => {this.setState({
              selectedVideo: vidSelected
            })}}
          />
        </div>
      );
    }
  }

}

export default Main;
