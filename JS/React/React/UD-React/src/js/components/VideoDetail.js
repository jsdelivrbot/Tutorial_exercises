/* MAIN VIDEO SCREEN COMPONENT
=============================*/

import React from 'react';

const VideoDetail = ({video}) => {

  /**
  * @return Loading div if props video has not been passed to component yet
  */
  if(!video){
    return <div>Loading....</div>;
  }

  //Declare compoenet varibales
  const vID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${vID}`;

  /**
  * @return - Video component containing video source, title and description
  */
  return(
    <div className="video-detail col-md-9">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
