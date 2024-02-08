'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import trueEgg from '../public/crazy-eggs/egg-true-reaction.png';
import falseEgg from '../public/crazy-eggs/egg-false-reaction.png';

const Likes = ({ slug, type }: any) => {
  const [count, setCount] = useState(0);
  const [reacted, setReacted] = useState(false);

  useEffect(() => {
    // Fetch the initial count on component mount
    fetch(`/api/reactions?slug=${slug}&type=${type}`)
      .then((response) => response.json())
      .then((data) => setCount(data.reactions));
  }, [slug, type]);

  const addReaction = () => {
    // Increase the count
    fetch('/api/reactions', {
      method: 'POST',
      body: JSON.stringify({ slug, type }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Reaction count updated.') {
          setCount((prevCount) => prevCount + 1);
          setReacted(true);
        }
      });
  };

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      onClick={addReaction}
    >
      <img
        src={reacted ? '/blog/like-true.png' : '/blog/like-false.png'}
        alt="Likes"
        style={{ marginRight: '5px', width: '24px', height: '24px' }} // Adds some space between the image and the text
      />
      <p style={{ margin: 0 }}>{count} likes</p>
    </div>
  );
};

export default Likes;
