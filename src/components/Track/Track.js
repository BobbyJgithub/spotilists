import React, {useState} from "react";
import coverArt from '../../images/coverart.jpeg';
import styles from './Track.module.css';

function Track({ name, artist, album, playlistData, setPlaylistData }) {

    function handleImageClick() {
        const isInPlaylist = playlistData.some(song => song.name === name);
        if (!isInPlaylist) {
            setPlaylistData([...playlistData, {name, artist, album}]);
        } else {
            setPlaylistData(playlistData.filter(song => song.name !== name));
        }
    }

  return (
    <div className={styles.track} onClick={handleImageClick} style={{cursor: 'pointer'}}>
        <img className={styles.img} src={coverArt} alt="Album cover art" />
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.details}>{artist} | {album}</p>
    </div>
  );
}

export default Track;