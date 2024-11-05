import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ playlistData, setPlaylistData }) {
    return (
        <>
        <h2>Playlist</h2>
        <Tracklist playlistData={playlistData} setPlaylistData={setPlaylistData} songs={playlistData} />
      </>
    );
}

export default Playlist;