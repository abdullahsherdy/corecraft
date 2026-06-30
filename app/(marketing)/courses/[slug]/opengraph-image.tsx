import { ImageResponse } from 'next/og';
import { sanityFetchOne } from '@/lib/sanity/client';
import { COURSE_BY_SLUG_QUERY } from '@/lib/sanity/queries';
import type { Course } from '@/lib/sanity/types';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

interface Props {
  params: { slug: string };
}

export default async function OgImage({ params }: Props) {
  const course = await sanityFetchOne<Course>(COURSE_BY_SLUG_QUERY, {
    slug: params.slug,
  });

  const title = course?.title ?? 'Course';
  const track = course?.track ?? '';
  const level = course?.level ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#1A2B4C',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top: title + badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              maxWidth: '900px',
            }}
          >
            {title}
          </div>

          {(track || level) && (
            <div style={{ display: 'flex', gap: '12px' }}>
              {track && (
                <div
                  style={{
                    backgroundColor: '#2D4170',
                    color: '#00C4B3',
                    fontSize: '20px',
                    fontWeight: 500,
                    padding: '8px 20px',
                    borderRadius: '999px',
                    textTransform: 'capitalize',
                  }}
                >
                  {track}
                </div>
              )}
              {level && (
                <div
                  style={{
                    backgroundColor: '#2D4170',
                    color: '#F4A622',
                    fontSize: '20px',
                    fontWeight: 500,
                    padding: '8px 20px',
                    borderRadius: '999px',
                    textTransform: 'capitalize',
                  }}
                >
                  {level}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom-right: CoreCraft wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            alignSelf: 'flex-end',
          }}
        >
          <svg width="36" height="36" viewBox="0 0 72 72" fill="none">
            <path d="M18 16 L9 36 L18 56" stroke="#00C4B3" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M54 16 L63 36 L54 56" stroke="#00C4B3" strokeWidth="3.5" strokeLinecap="round" />
            <rect x="27" y="27" width="18" height="18" rx="3" fill="#F4A622" transform="rotate(45 36 36)" />
          </svg>
          <div style={{ fontSize: '28px', fontWeight: 500, color: '#00C4B3', display: 'flex' }}>
            CoreCraft
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
