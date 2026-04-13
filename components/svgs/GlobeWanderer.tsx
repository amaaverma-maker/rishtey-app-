export default function GlobeWanderer({ width = 160, height = 200 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Globe circle */}
      <circle cx="80" cy="100" r="70" stroke="#DC6B52" strokeWidth="1.2" fill="none" />

      {/* Latitude lines */}
      <ellipse cx="80" cy="100" rx="70" ry="20" stroke="#DC6B52" strokeWidth="0.6" fill="none" opacity="0.5" />
      <ellipse cx="80" cy="100" rx="70" ry="42" stroke="#DC6B52" strokeWidth="0.6" fill="none" opacity="0.4" />
      <ellipse cx="80" cy="100" rx="70" ry="62" stroke="#DC6B52" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Longitude lines — vertical curves */}
      <path d="M 80 30 Q 115 100 80 170" stroke="#DC6B52" strokeWidth="0.6" fill="none" opacity="0.5" />
      <path d="M 80 30 Q 45 100 80 170" stroke="#DC6B52" strokeWidth="0.6" fill="none" opacity="0.5" />
      <path d="M 80 30 Q 130 100 80 170" stroke="#DC6B52" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M 80 30 Q 30 100 80 170" stroke="#DC6B52" strokeWidth="0.5" fill="none" opacity="0.3" />
      {/* Vertical axis */}
      <line x1="80" y1="30" x2="80" y2="170" stroke="#DC6B52" strokeWidth="0.6" opacity="0.4" />

      {/* Equator line accent */}
      <line x1="10" y1="100" x2="150" y2="100" stroke="#DC6B52" strokeWidth="0.8" opacity="0.5" />

      {/* Small figure silhouette standing at equator on the right-visible portion */}
      {/* Body */}
      <line x1="115" y1="100" x2="115" y2="88" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" />
      {/* Head */}
      <circle cx="115" cy="85" r="3" stroke="#3D1F14" strokeWidth="1.2" fill="none" />
      {/* Arms */}
      <path d="M 110 93 L 115 90 L 120 93" stroke="#3D1F14" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <path d="M 115 100 L 112 107" stroke="#3D1F14" strokeWidth="1" strokeLinecap="round" />
      <path d="M 115 100 L 118 107" stroke="#3D1F14" strokeWidth="1" strokeLinecap="round" />

      {/* North/south poles — small marks */}
      <circle cx="80" cy="30" r="2" fill="#DC6B52" opacity="0.6" />
      <circle cx="80" cy="170" r="2" fill="#DC6B52" opacity="0.6" />

      {/* Small compass rose at top */}
      <line x1="80" y1="8" x2="80" y2="18" stroke="#DC6B52" strokeWidth="0.8" opacity="0.5" />
      <line x1="75" y1="13" x2="85" y2="13" stroke="#DC6B52" strokeWidth="0.8" opacity="0.5" />
      <circle cx="80" cy="13" r="1" fill="#DC6B52" opacity="0.4" />
    </svg>
  )
}
