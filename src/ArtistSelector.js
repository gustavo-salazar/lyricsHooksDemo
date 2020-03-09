import React from 'react';

const ArtistSelector = ({ artists = [], onChange }) => (
  <select onChange={onChange}>
    {artists.map(artist => (
      <option key={artist}>{artist}</option>
    ))}
  </select>
);

export default ArtistSelector;