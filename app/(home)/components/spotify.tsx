'use client';

import React from 'react';
import { Section } from '@/components/section';
import { useState, useEffect } from 'react';

function SpotifyPlayer() {
  const [trackId, setTrackId] = useState('1JhbgwBdzqZ37naFK4agOW'); // Default track ID

  // Fetch the current song every 3 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/spotify')
        .then((response) => response.json())
        .then((data) => {
          setTrackId(data.trackId);
        });
    }, 30000); // 3 minutes

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Section title="What I'm currently listening to">
      <iframe
        style={{ borderRadius: '12px' }}
        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </Section>
  );
}

export default SpotifyPlayer;
