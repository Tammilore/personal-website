// 'use client'; is a directive for Next.js to run this component only on the client-side
'use client';
import { useEffect, useState } from 'react';
import { EyeOpenIcon } from '@radix-ui/react-icons';

const PageViewCounter = ({ page }: { page: string }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Post to increment page view
        const check = await fetch(
          'https://x8ki-letl-twmt.n7.xano.io/api:WXxopL0o/views',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ page }),
          }
        );

        console.log(check);
        // Get current page views count
        const result = await fetch(
          `https://x8ki-letl-twmt.n7.xano.io/api:WXxopL0o/views?page=${page}`
        );
        const data = await result.json();
        setViews(data.views); // Update state with the views count
      } catch (error) {
        console.error('Failed to fetch page views: ', error);
      }
    };

    fetchData();
  }, [page]); // Re-run the effect if the page identifier changes

  return (
    <div className="flex items-center">
      {' '}
      {/* Ensure items are aligned center and displayed in a flex row */}
      <EyeOpenIcon className="ml-1" /> {/* Icon with a left margin */}
      <span className="ml-1">{views} views</span>{' '}
      {/* Number of views and text with a left margin */}
    </div>
  );
};

export default PageViewCounter;
