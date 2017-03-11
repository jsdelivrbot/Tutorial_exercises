import axios from 'axios';

//
// Return tracks from Spotify
//
const returnSongs = ( searchTerm ) => {

  return new Promise((resolve, reject) => {
    const result = axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`);
          result.then(({ data }) => {
            return resolve(data);
          })
          .catch((err) => {
            return reject(err);
          })
  });

}

export default returnSongs;
