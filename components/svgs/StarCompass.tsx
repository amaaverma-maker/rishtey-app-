const p = (n: number) => Math.round(n * 1e4) / 1e4

export default function StarCompass({ size = 700, opacity = 0.07 }: { size?: number; opacity?: number }) {
  const cx = 350
  const cy = 350
  const outerR = 320
  const innerR = 130
  const midR = 220

  // 12-pointed star from straight lines only
  const points12 = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180)
    return {
      outer: { x: p(cx + outerR * Math.cos(angle)), y: p(cy + outerR * Math.sin(angle)) },
      inner: { x: p(cx + innerR * Math.cos(angle)), y: p(cy + innerR * Math.sin(angle)) },
      mid:   { x: p(cx + midR   * Math.cos(angle)), y: p(cy + midR   * Math.sin(angle)) },
    }
  })

  // Build the 12-pointed star polygon by alternating outer/inner
  const starPoints12 = Array.from({ length: 24 }, (_, i) => {
    const idx = Math.floor(i / 2)
    const isOuter = i % 2 === 0
    const angle = (idx * 30 + (isOuter ? 0 : 15) - 90) * (Math.PI / 180)
    const r = isOuter ? outerR : innerR * 0.55
    return `${p(cx + r * Math.cos(angle))},${p(cy + r * Math.sin(angle))}`
  }).join(' ')

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 700 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 12-pointed star from center spokes */}
      {points12.map((p, i) => (
        <line
          key={`spoke-${i}`}
          x1={cx} y1={cy}
          x2={p.outer.x} y2={p.outer.y}
          stroke="#DC6B52" strokeWidth="0.8" opacity={opacity * 14}
        />
      ))}

      {/* Connect outer points to form star polygon */}
      <polygon
        points={starPoints12}
        stroke="#DC6B52" strokeWidth="0.8" fill="none" opacity={opacity * 14}
      />

      {/* Inner concentric rings — straight-line octagon/dodecagon */}
      {[innerR * 0.3, innerR * 0.55, innerR, midR, outerR * 0.75, outerR].map((r, ri) => {
        const sides = 12
        const pts = Array.from({ length: sides }, (_, i) => {
          const angle = (i * (360 / sides) - 90) * (Math.PI / 180)
          return `${p(cx + r * Math.cos(angle))},${p(cy + r * Math.sin(angle))}`
        }).join(' ')
        return (
          <polygon
            key={`ring-${ri}`}
            points={pts}
            stroke="#DC6B52" strokeWidth="0.8" fill="none" opacity={opacity * 10}
          />
        )
      })}

      {/* Cross lines connecting opposite outer points — straight only */}
      {points12.slice(0, 6).map((p, i) => (
        <line
          key={`cross-${i}`}
          x1={p.outer.x} y1={p.outer.y}
          x2={points12[i + 6].outer.x} y2={points12[i + 6].outer.y}
          stroke="#DC6B52" strokeWidth="0.8" opacity={opacity * 8}
        />
      ))}

      {/* Square cross-hairs at 45° intervals */}
      {[0, 1, 2, 3].map(i => {
        const a1 = (i * 45 - 90) * (Math.PI / 180)
        const a2 = ((i * 45 + 90) - 90) * (Math.PI / 180)
        return (
          <line
            key={`diag-${i}`}
            x1={p(cx + outerR * Math.cos(a1))} y1={p(cy + outerR * Math.sin(a1))}
            x2={p(cx + outerR * Math.cos(a2))} y2={p(cy + outerR * Math.sin(a2))}
            stroke="#DC6B52" strokeWidth="0.6" opacity={opacity * 6}
          />
        )
      })}
    </svg>
  )
}
