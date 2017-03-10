import React from 'react';

const VideoListItem = ({video, onSelectedVideo}) => {

  /**
  * @return <li> for media thumbnail including thumb image and title
  */
  return(
    <li>
      <div className="list-group-item">
        <div className="video-list media">
          <img className="media-object" src={video.snippet.thumbnails.default.url} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
          <button onClick={()=> onSelectedVideo(video)}
            className="btn btn-default">View video</button>
        </div>
      </div>
    </li>
  );

};

export default VideoListItem;
