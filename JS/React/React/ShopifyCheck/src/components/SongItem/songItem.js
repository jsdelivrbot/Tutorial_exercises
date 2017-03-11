/**
*
* @summary       : Stateless component to provide data on selected song
* @dependencies  : app.js
*
*/

import React, { PropTypes } from 'react';
import styles from './songitem.css';

const songItem = (props) => {

  const { songData } = props;
  const { album, name } = songData;
  const image = album.images[1];

  return(
    <section className={styles.root}>

      {/*Song image */}
      <div className={styles.album}>
        <img src={image.url} />
        <span className={styles.name}> {name} </span>
      </div>

      {/* Song description */}
      <div className={styles.songDescripton}>
        <audio
          controls
          duration
          src={songData.preview_url}
          />
        <span className={styles.songDescription}>Name: {songData.name}</span>
        <span className={styles.songDescription}>Duration: {songData.duration_ms / 1000}s </span>
      </div>

    </section>
  )
}

export default songItem;
