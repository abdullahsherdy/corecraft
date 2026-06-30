import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#1A2B4C',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          gap: '20px',
        }}
      >
        {/* Logo mark */}
        <svg width="80" height="80" viewBox="0 0 72 72" fill="none">
          <path d="M18 16 L9 36 L18 56" stroke="#00C4B3" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M54 16 L63 36 L54 56" stroke="#00C4B3" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="27" y="27" width="18" height="18" rx="3" fill="#F4A622" transform="rotate(45 36 36)" />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-1px',
            display: 'flex',
          }}
        >
          <span>Core</span>
          <span style={{ color: '#00C4B3' }}>Craft</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 400,
            color: '#00C4B3',
          }}
        >
          Build from the core.
        </div>
      </div>
    ),
    { ...size },
  );
}
