import React from 'react';
import ctsLogoBg from '../assets/CTS_Logo_BG.png';

export default function Logo({ mode = 'light', size = 'normal' }) {
  const scaleFactor = size === 'large' ? 1.4 : size === 'small' ? 0.75 : 1;
  const width = 320 * scaleFactor;

  return (
    <div className={`cts-logo-container mode-${mode}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src={ctsLogoBg}
        alt="Chaitanya Tech Solutions Pvt. Ltd."
        style={{
          width: `${width}px`,
          height: 'auto',
          maxWidth: '100%',
          display: 'block',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 50, 150, 0.18)',
          transition: 'all 0.3s ease'
        }}
      />
    </div>
  );
}
