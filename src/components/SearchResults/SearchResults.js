import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ searchValue, playlistData, setPlaylistData, songs }) {
  const filteredSongs = songs.filter(song =>
    song.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <h2>Search Results</h2>
      <h3>{searchValue}</h3>
      <Tracklist playlistData={playlistData} setPlaylistData={setPlaylistData} songs={filteredSongs} />
    </>
  );
}

export default SearchResults;
