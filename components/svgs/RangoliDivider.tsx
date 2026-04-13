interface RangoliDividerProps {
  bg?: string
}

// Colors cycling across the motifs: salmon → saffron → rani pink → peacock → haldi
const COLORS = ['#DC6B52', '#E8960C', '#C94980', '#1A7B8A', '#E8C14A']

function Lotus({ cx, cy, r, color }: { cx: number; cy: number; r: number; color: string }) {
  // A simple 6-petal lotus
  const petals = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 - 90) * (Math.PI / 180)
    const px = cx + r * 1.3 * Math.cos(angle)
    const py = cy + r * 1.3 * Math.sin(angle)
    return `M ${cx} ${cy} Q ${cx + r * 0.6 * Math.cos(angle - 0.5)} ${cy + r * 0.6 * Math.sin(angle - 0.5)} ${px} ${py} Q ${cx + r * 0.6 * Math.cos(angle + 0.5)} ${cy + r * 0.6 * Math.sin(angle + 0.5)} ${cx} ${cy}`
  })
  return (
    <g>
      {petals.map((d, i) => (
        <path key={i} d={d} stroke={color} strokeWidth="0.8" fill="none" opacity="0.85" />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.35} stroke={color} strokeWidth="0.7" fill="none" opacity="0.7" />
      <circle cx={cx} cy={cy} r={r * 0.12} fill={color} opacity="0.6" />
    </g>
  )
}

function Diamond({ cx, cy, size, color }: { cx: number; cy: number; size: number; color: string }) {
  return (
    <polygon
      points={`${cx},${cy - size} ${cx + size * 0.65},${cy} ${cx},${cy + size} ${cx - size * 0.65},${cy}`}
      stroke={color}
      strokeWidth="0.9"
      fill="none"
      opacity="0.8"
    />
  )
}

function Paisley({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g>
      <path
        d={`M ${cx} ${cy + 5} C ${cx - 4} ${cy + 2} ${cx - 5} ${cy - 3} ${cx - 1} ${cy - 6} C ${cx + 2} ${cy - 8} ${cx + 5} ${cy - 6} ${cx + 4} ${cy - 2} C ${cx + 3} ${cy + 1} ${cx + 1} ${cy + 3} ${cx} ${cy + 5} Z`}
        stroke={color}
        strokeWidth="0.8"
        fill="none"
        opacity="0.75"
      />
      <circle cx={cx} cy={cy - 3} r="1" fill={color} opacity="0.5" />
    </g>
  )
}

export default function RangoliDivider({ bg = '#FDF6F0' }: RangoliDividerProps) {
  const count = 19
  const unit = 44
  const totalWidth = count * unit
  const cy = 20

  const motifs = Array.from({ length: count }, (_, i) => {
    const cx = i * unit + unit / 2
    const color = COLORS[i % COLORS.length]

    if (i % 4 === 0) return <Lotus key={i} cx={cx} cy={cy} r={7} color={color} />
    if (i % 4 === 2) return <Diamond key={i} cx={cx} cy={cy} size={6} color={color} />
    if (i % 4 === 1) return <Paisley key={i} cx={cx} cy={cy} color={color} />
    // i % 4 === 3: dot cluster
    return (
      <g key={i}>
        <circle cx={cx} cy={cy} r="1.4" fill={color} opacity="0.65" />
        <circle cx={cx - 5} cy={cy} r="0.8" fill={color} opacity="0.35" />
        <circle cx={cx + 5} cy={cy} r="0.8" fill={color} opacity="0.35" />
      </g>
    )
  })

  return (
    <div style={{ backgroundColor: bg, overflow: 'hidden', lineHeight: 0 }}>
      <svg
        width="100%"
        height="40"
        viewBox={`0 0 ${totalWidth} 40`}
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top fine rule */}
        <line x1="0" y1="4" x2={totalWidth} y2="4" stroke="#DC6B52" strokeWidth="0.5" opacity="0.2" />
        {/* Bottom fine rule */}
        <line x1="0" y1="36" x2={totalWidth} y2="36" stroke="#DC6B52" strokeWidth="0.5" opacity="0.2" />

        {motifs}
      </svg>
    </div>
  )
}
