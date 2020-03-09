import React, { useState } from "react";
import "./App.css";
import {LyricsContext} from "./LyricsContext";
import ArtistSelector from "./ArtistSelector";
import Lyrics from "./Lyrics";
import SongList from "./SongList";
import localData from "./songsByArtists.json";

const App = () => {
  const [artist, setArtist] = useState(null);
  const [song, setSong] = useState(null);
  const songs = localData?.[artist] || [];
  const handleChange = evt => {
    setArtist(evt.target.value);
  }
  return (
    <LyricsContext.Provider value={{artist, song}}>
      <div className="lyrics-demo">
        <h1>Lyrics Demo</h1>
        <header>
          <ArtistSelector
            artists={Object.keys(localData)}
            onChange={handleChange}
          />
          <SongList songs={songs} onClick={setSong}/>
        </header>
        <Lyrics/>
      </div>
    </LyricsContext.Provider>
  );
};

export default App;
