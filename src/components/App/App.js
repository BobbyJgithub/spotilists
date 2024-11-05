import './App.css';
import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Tracklist from '../Tracklist/Tracklist.js';
import Playlist from '../Playlist/Playlist.js';
import Track from '../Track/Track.js';

const mockData = [
  {
      id: 1,
      name: "Song 1",
      artist: "Artist 1",
      album: "Album 1",
  },
  {
      id: 2,
      name: "Song 2",
      artist: "Artist 2",
      album: "Album 2",
  },
  {
      id: 3,
      name: "Song 3",
      artist: "Artist 3",
      album: "Album 3",
  },
  {
      id: 4,
      name: "Song 4",
      artist: "Artist 4",
      album: "Album 4",
  },
  {
      id: 5,
      name: "Song 5",
      artist: "Artist 5",
      album: "Album 5",
  },
  {
      id: 6,
      name: "Song 6",
      artist: "Artist 6",
      album: "Album 6",
  },
  {
      id: 7,
      name: "Song 7",
      artist: "Artist 7",
      album: "Album 7",
  },
  {
      id: 8,
      name: "Song 8",
      artist: "Artist 8",
      album: "Album 8",
  }
];


function App() {
  const [searchValue, setSearchValue] = useState("");
  const [playlistData, setPlaylistData] = useState([]);

  return (
    <div className="App">
      <h1>Spotilists</h1>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      <SearchResults searchValue={searchValue} playlistData={playlistData} setPlaylistData={setPlaylistData} songs={mockData}/>
      <Playlist playlistData={playlistData} setPlaylistData={setPlaylistData} songs={mockData}/> {/* Pass mockData to Playlist */}
    </div>
  );
}

export default App;
