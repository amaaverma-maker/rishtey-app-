import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FDF6F0',
          position: 'relative',
        }}
      >
        {/* Top decorative border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #DC6B52, #E8960C, #C94980, #DC6B52)',
          }}
        />

        {/* Bottom decorative border */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #DC6B52, #E8960C, #C94980, #DC6B52)',
          }}
        />

        {/* Arch icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          <svg
            width="90"
            height="110"
            viewBox="0 0 90 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer arch */}
            <path
              d="M10 110 L10 45 Q10 5 45 5 Q80 5 80 45 L80 110"
              stroke="#DC6B52"
              strokeWidth="3"
              fill="none"
            />
            {/* Inner arch */}
            <path
              d="M20 110 L20 48 Q20 18 45 18 Q70 18 70 48 L70 110"
              stroke="#DC6B52"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 3"
            />
            {/* Center diamond */}
            <circle cx="45" cy="55" r="5" fill="#E8960C" />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: '96px',
            fontFamily: 'Georgia, serif',
            color: '#3D1F14',
            letterSpacing: '-2px',
            fontWeight: '400',
            lineHeight: 1,
            marginBottom: '16px',
          }}
        >
          Rishtey
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          <div style={{ width: '60px', height: '1px', backgroundColor: '#DC6B52' }} />
          <div style={{ width: '8px', height: '8px', backgroundColor: '#E8960C', transform: 'rotate(45deg)' }} />
          <div style={{ width: '60px', height: '1px', backgroundColor: '#DC6B52' }} />
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '28px',
            fontFamily: 'Georgia, serif',
            color: '#6B3525',
            fontStyle: 'italic',
            letterSpacing: '1px',
            marginBottom: '12px',
          }}
        >
          Connections that last.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '18px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#A04E35',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontWeight: '300',
          }}
        >
          Boutique South Asian Matchmaking
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            fontSize: '15px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#DC6B52',
            letterSpacing: '2px',
          }}
        >
          rishtey.us
        </div>
      </div>
    ),
    { ...size }
  )
}
