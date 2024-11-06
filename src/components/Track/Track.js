import React, {useState} from "react";
import coverArt from '../../images/coverart.jpeg';
import styles from './Track.module.css';

function Track({ id,name, artist, album, albumArt, playlistData, setPlaylistData }) {

    function handleImageClick() {
        const isInPlaylist = playlistData.some(song => song.name === name);
        if (!isInPlaylist) {
            setPlaylistData([...playlistData, {id, name, artist, album, albumArt}]);
        } else {
            setPlaylistData(playlistData.filter(song => song.name !== name));
        }
    }

  return (
    <div className={styles.track} onClick={handleImageClick} style={{cursor: 'pointer'}}>
        <img className={styles.img} src={albumArt || coverArt}  alt="Album cover art" />
        <h2 className={styles.title}>{name}</h2>
        <h3 className={styles.artist}>{artist}</h3>
        <p className={styles.album}>{album}</p>
    </div>
  );
}

export default Track;