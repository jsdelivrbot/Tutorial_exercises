/**
*
* @summary       : Stateless component to render array of songs
*
*
*/

import React, { PropTypes } from 'react';
import styles from './songlist.css';

const SongList = (props) => {

  return(
    <section className={styles.root}>
      {props.songArray.map((song,index) => {
        return(
          <div key={song.uri} onClick={() => props.selectSong(index)}>
            <img className={styles.image} src={song.album.images[0].url}/>
            <span className={styles.songDescription}>Name: {song.name} </span>
          </div>
        )
      })}
    </section>
  )
}

SongList.propTypes = {
  songArray: PropTypes.array
}

export default SongList;
