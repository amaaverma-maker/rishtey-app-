const p = (n: number) => Math.round(n * 1e4) / 1e4

export default function YantraRays({ size = 600 }: { size?: number }) {
  const cx = 300
  const cy = 300
  const innerR = 40
  const outerR = 280
  const numRays = 30

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Central circle */}
      <circle cx={cx} cy={cy} r={innerR} stroke="#FDF6F0" strokeWidth="0.8" fill="none" opacity="0.05" />
      <circle cx={cx} cy={cy} r={innerR * 0.5} stroke="#FDF6F0" strokeWidth="0.6" fill="none" opacity="0.05" />

      {/* Radiating rays */}
      {Array.from({ length: numRays }, (_, i) => {
        const angle = (i * (360 / numRays) - 90) * (Math.PI / 180)
        const x1 = p(cx + innerR * Math.cos(angle))
        const y1 = p(cy + innerR * Math.sin(angle))
        const x2 = p(cx + outerR * Math.cos(angle))
        const y2 = p(cy + outerR * Math.sin(angle))
        return (
          <line
            key={i}
            x1={x1} y1={y1}
            x2={x2} y2={y2}
            stroke="#FDF6F0"
            strokeWidth="0.6"
            opacity="0.05"
          />
        )
      })}

      {/* Concentric rings at intervals */}
      {[80, 130, 180, 230, 280].map((r, i) => (
        <circle
          key={i}
          cx={cx} cy={cy}
          r={r}
          stroke="#FDF6F0"
          strokeWidth="0.5"
          fill="none"
          opacity="0.04"
        />
      ))}
    </svg>
  )
}
