import React from "react";

const SongList = ({ songs = [], onClick }) => (
  <ul>
    {songs.map(song => (
      <li key={song}>
        <button onClick={() => onClick(song)}>{song}</button>
      </li>
    ))}
  </ul>
);

export default SongList;
