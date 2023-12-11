// LikeButton.tsx
import React, { useState, useEffect } from 'react';
import { FaFire } from 'react-icons/fa';
// import './LikeButton.css';

interface LikeButtonProps {
  slug: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ slug }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Read likes from API on component mount
  useEffect(() => {
    fetch(`/api/likes?slug=${slug}`)
      .then((response) => response.json())
      .then((data) => setLikes(data.likes));
  }, [slug]);

  const incrementLikes = () => {
    setIsLiked(true);
    const newLikes = likes + 1;
    setLikes(newLikes);

    // Update likes in API
    fetch('/api/likes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug, likes: newLikes }),
    });
  };

  return (
    <button
      onClick={incrementLikes}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: isLiked ? 'red' : 'gray',
        transition: 'color 0.3s',
        animation: isLiked ? 'like-animation 0.3s' : 'none',
      }}
    >
      <FaFire style={{ marginRight: '10px' }} />
      <span>{likes}</span>
    </button>
  );
};

export default LikeButton;
