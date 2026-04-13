export default function MughalArch({ width = 500, height = 620 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Cusped Mughal arch — just the silhouette outline */}
      {/* Outer arch shape */}
      <path
        d="
          M 80 580
          L 80 300
          C 80 180 120 120 160 90
          C 190 68 210 60 250 58
          C 290 60 310 68 340 90
          C 380 120 420 180 420 300
          L 420 580
          L 80 580
          Z
        "
        stroke="#FDF6F0"
        strokeWidth="1"
        fill="none"
        opacity="0.03"
      />
      {/* Inner cusped arch — the characteristic Mughal cusps along the arch */}
      <path
        d="
          M 110 560
          L 110 310
          C 110 230 128 170 155 132
          Q 165 118 175 108
          Q 185 96 190 85
          Q 210 62 250 60
          Q 290 62 310 85
          Q 315 96 325 108
          Q 335 118 345 132
          C 372 170 390 230 390 310
          L 390 560
        "
        stroke="#FDF6F0"
        strokeWidth="1"
        fill="none"
        opacity="0.03"
      />
      {/* Central keystone detail */}
      <path
        d="M 230 60 L 250 38 L 270 60"
        stroke="#FDF6F0"
        strokeWidth="0.8"
        fill="none"
        opacity="0.03"
      />
      {/* Arch base platform */}
      <line x1="60" y1="580" x2="440" y2="580" stroke="#FDF6F0" strokeWidth="1" opacity="0.03" />
      <line x1="60" y1="590" x2="440" y2="590" stroke="#FDF6F0" strokeWidth="0.6" opacity="0.02" />
      {/* Pillar column left */}
      <line x1="80" y1="580" x2="80" y2="610" stroke="#FDF6F0" strokeWidth="1.5" opacity="0.03" />
      {/* Pillar column right */}
      <line x1="420" y1="580" x2="420" y2="610" stroke="#FDF6F0" strokeWidth="1.5" opacity="0.03" />
    </svg>
  )
}
