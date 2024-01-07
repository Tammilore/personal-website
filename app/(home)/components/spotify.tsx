'use client';

import React, { useState, useEffect } from 'react';
import { Section } from '@/components/section';

function SpotifyPlayer() {
  const [trackId, setTrackId] = useState(null); // Default track ID

  // Fetch the current song immediately when the component mounts, and then every 3 minutes
  useEffect(() => {
    // Function to fetch current song
    const fetchSong = () => {
      fetch('/api/spotify')
        .then((response) => response.json())
        .then((data) => {
          setTrackId(data.trackId);
        });
    };

    // Fetch the song immediately
    fetchSong();

    // Then set up interval to fetch the song every 30 seconds
    const interval = setInterval(fetchSong, 30000); // 30 seconds

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Section title="What I'm currently listening to">
      {trackId && (
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
      )}
    </Section>
  );
}

export default SpotifyPlayer;
