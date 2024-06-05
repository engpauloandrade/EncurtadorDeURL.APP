// src/ShortenForm.js
import React, { useState } from 'react';

function ShortenForm({ onShorten }) {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onShorten(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL to shorten"
        required
      />
      <button type="submit">Shorten URL</button>
    </form>
  );
}

export default ShortenForm;
