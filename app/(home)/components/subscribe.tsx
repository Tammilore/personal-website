import React from 'react';

export const Announcement = () => (
  <div
    style={{
      backgroundColor: '#f8f9fa',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      alignItems: 'flex-start',
    }}
  >
    <p style={{ color: '#1a202c', fontSize: '14px', margin: '0px' }}>
      I'm starting up my newsletter... again! Yes, yes, I know - but here we
      are, lol!
    </p>
    <a
      href="/mailing-list"
      style={{
        textDecoration: 'none',
        backgroundColor: '#1a202c',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px',
        textAlign: 'center',
      }}
    >
      Please subscribe 🙈
    </a>
  </div>
);

export default Announcement;
