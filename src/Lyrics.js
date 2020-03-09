import React, { useContext, useState, useEffect } from "react";
import { LyricsContext } from "./LyricsContext";

const api = "https://api.lyrics.ovh/v1";

const Lyrics = () => {
  const { artist, song } = useContext(LyricsContext);
  const [lyrics, setLyrics] = useState("");

  const fetchLyrics = async (artist, song) => {
    const response = await fetch(`${api}/${artist}/${song}/`);
    const json = await response.json();
    setLyrics(json.lyrics);
  };
  useEffect(() => {
    if (artist && song) {
      fetchLyrics(artist, song);
    } else {
      setLyrics("");
    }
  }, [artist, song]);
  return (
    <>
      <h4>
        {song} by {artist}
      </h4>
      <div>
        <pre>{lyrics}</pre>
      </div>
    </>
  );
};

export default Lyrics;
