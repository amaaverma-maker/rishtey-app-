export default function LeavesTouch({ width = 160, height = 200 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left leaf — curves from bottom-left toward center */}
      <path
        d="M 20 180 C 10 140 15 100 30 70 C 45 40 65 20 80 10"
        stroke="#3D1F14" strokeWidth="1.5" fill="none" strokeLinecap="round"
      />
      {/* Left leaf body — the leaf form curving right */}
      <path
        d="M 20 180 C 30 155 50 120 65 95 C 75 78 80 60 80 10"
        stroke="#3D1F14" strokeWidth="1.2" fill="none" strokeLinecap="round"
      />
      {/* Left leaf inner vein */}
      <path
        d="M 50 130 C 60 110 68 90 80 10"
        stroke="#3D1F14" strokeWidth="0.6" fill="none" strokeLinecap="round" opacity="0.5"
      />
      <path
        d="M 35 155 C 48 138 60 118 75 65"
        stroke="#3D1F14" strokeWidth="0.5" fill="none" strokeLinecap="round" opacity="0.4"
      />

      {/* Right leaf — curves from bottom-right toward center, almost touching */}
      <path
        d="M 140 180 C 150 140 145 100 130 70 C 115 40 95 20 82 12"
        stroke="#3D1F14" strokeWidth="1.5" fill="none" strokeLinecap="round"
      />
      <path
        d="M 140 180 C 130 155 110 120 95 95 C 85 78 82 60 82 12"
        stroke="#3D1F14" strokeWidth="1.2" fill="none" strokeLinecap="round"
      />
      {/* Right leaf inner vein */}
      <path
        d="M 110 130 C 100 110 92 90 82 12"
        stroke="#3D1F14" strokeWidth="0.6" fill="none" strokeLinecap="round" opacity="0.5"
      />
      <path
        d="M 125 155 C 112 138 100 118 85 65"
        stroke="#3D1F14" strokeWidth="0.5" fill="none" strokeLinecap="round" opacity="0.4"
      />

      {/* The near-touch point at tip — tiny gap, suggestion of connection */}
      <circle cx="81" cy="11" r="1.5" fill="#DC6B52" opacity="0.7" />

      {/* Tiny floating botanicals between the stems */}
      <path d="M 72 100 C 70 94 73 88 77 86" stroke="#DC6B52" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M 88 100 C 90 94 87 88 83 86" stroke="#DC6B52" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.6" />
      <circle cx="80" cy="85" r="1.5" stroke="#DC6B52" strokeWidth="0.8" fill="none" opacity="0.6" />
    </svg>
  )
}
