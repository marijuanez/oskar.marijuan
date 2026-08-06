import React from 'react';

export const HorizontalPintxoIcon = ({ color = '#3EC1C9', width = 160, height = 36 }) => {
  return (
    <div className="horizontal-pintxo-wrapper" style={{ display: 'flex', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 200 44" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Horizontal Toothpick Line */}
        <line x1="10" y1="22" x2="190" y2="22" stroke={color} strokeWidth="3" strokeLinecap="round" />

        {/* First Shape: Triangle (Pointing Right) */}
        <polygon points="35,10 65,22 35,34" fill="none" stroke={color} strokeWidth="3.5" strokeLinejoin="round" />

        {/* Middle Shape: Diamond */}
        <polygon points="100,8 118,22 100,36 82,22" fill="none" stroke={color} strokeWidth="3.5" strokeLinejoin="round" />

        {/* Third Shape: Vertical Pill / Rounded Oblong */}
        <rect x="140" y="10" width="16" height="24" rx="8" fill="none" stroke={color} strokeWidth="3.5" />
      </svg>
    </div>
  );
};
