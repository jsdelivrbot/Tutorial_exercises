import React from 'react';

const VideoListItem = ({video}) => {

  return(
    <li>
      <div className="list-group-item">
        <div className="video-list media">
          <img className="media-object" src={video.snippet.thumbnails.default.url} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
          <button className="btn btn-default">View</button>
        </div>
      </div>
    </li>
  );

};

export default VideoListItem;
