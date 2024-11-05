import React from "react";
import Track from "../Track/Track"; // Import Track component
import styles from "./Tracklist.module.css";

function Tracklist({ playlistData, setPlaylistData, songs }) {

    return (
        <div className={styles.tracklist}>
                {songs.map(song => (
                    <Track 
                        key={song.id} 
                        name={song.name} 
                        artist={song.artist} 
                        album={song.album} 
                        playlistData={playlistData}
                        setPlaylistData={setPlaylistData}
                    />
                ))}
        </div>
    );
}

export default Tracklist;