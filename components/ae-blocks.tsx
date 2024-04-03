import React from 'react';

// Placeholder for actual icons or images
const GeneralIcon = () => <img src="path-to-general-icon.png" alt="General" />;
const GeminiIcon = () => (
  <img src="path-to-gemini-icon.png" alt="Uses Gemini" />
);
const BeginnerIcon = () => (
  <img src="path-to-beginner-icon.png" alt="Beginner Friendly" />
);

export const AEBlock = () => (
  <div
    style={{
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      border: '1px solid #E2E8F0',
      borderRadius: '8px',
      padding: '16px',
      alignItems: 'flex-start',
      maxWidth: '300px',
    }}
  >
    <div
      style={{
        color: '#1A202C',
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '0px',
      }}
    >
      Analyse a business idea
    </div>
    <div
      style={{
        color: '#718096',
        fontSize: '14px',
        margin: '0px',
      }}
    >
      How to analyse business ideas with AI for viability and innovation
      potential.
    </div>
    <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <GeneralIcon />
        <span style={{ fontSize: '12px' }}>General</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <GeminiIcon />
        <span style={{ fontSize: '12px' }}>Uses Gemini</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <BeginnerIcon />
        <span style={{ fontSize: '12px' }}>Beginner friendly</span>
      </div>
    </div>
  </div>
);

export default AEBlock;
