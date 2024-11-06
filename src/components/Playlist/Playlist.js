import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

function Playlist({
  playlistData,
  setPlaylistData,
  playlistName,
  setPlaylistName,
  handleSavePlaylist,
  isLoading,
}) {
  const handleFocus = (event) => {
    event.target.select();
  };

  return (
    <>
      <h2 className={styles.title}>Playlist</h2>
      <div className={styles.container}>
        <div className={styles.playlist}>
          <input
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            onFocus={handleFocus}
            className={styles.input}
            placeholder="Enter Playlist Name"
          />
          <button
            onClick={handleSavePlaylist}
            disabled={isLoading || !playlistData.length}
            className={styles.button}>
            {isLoading ? "Saving..." : "Save to Spotify"}
          </button>
        </div>
      </div>
      <Tracklist
        playlistData={playlistData}
        setPlaylistData={setPlaylistData}
        songs={playlistData}
      />
    </>
  );
}

export default Playlist;
