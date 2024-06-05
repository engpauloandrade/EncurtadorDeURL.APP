import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ResolveUrl = () => {
  const { rashCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const resolveUrl = async () => {
      try {
        // Substitua a URL pela URL correta da sua API
        const response = await fetch(`http://localhost:24943/url/${rashCode}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'token': '01HNPN5NNX51ZJXZQ9NFTRW0AS'
          }
        });
        if (!response.ok) throw new Error('Falha ao resolver a URL');

        const data = await response.json();

        window.location.href = data.originalUrl;
      } catch (error) {
        console.error('Error resolving URL:', error);
        navigate('/error'); // Redireciona para uma página de erro caso não consiga resolver
      }
    };

    resolveUrl();
  }, [rashCode, navigate]);

  return <div>Redirecionando...</div>;
};

export default ResolveUrl;
