import React, { useState } from 'react';
import './App.css';
import ShortenForm from './ShortenForm';

function App() {
  const [shortenedUrl, setShortenedUrl] = useState('');

  const shortenUrl = async (url) => {
    try {
      const response = await fetch('http://localhost:24943/url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': '01HNPN5NNX51ZJXZQ9NFTRW0AS'
        },
        body: JSON.stringify({ originalUrl: url }),
      });
      const data = await response.json();
  
      // Monta a URL encurtada com o rashCode
      const shortenedUrlWithCode = `http://localhost:3000/${data.rashCode}`;
  
      // Atualiza o estado com a nova URL encurtada
      setShortenedUrl(shortenedUrlWithCode);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };  

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <ShortenForm onShorten={shortenUrl} />
      {shortenedUrl && <p>Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>}
    </div>
  );
}

export default App;
