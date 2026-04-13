export default function MandalaHero({ size = 480 }: { size?: number }) {
  const cx = 240, cy = 240

  const rad = (deg: number) => (deg - 90) * (Math.PI / 180)
  const pt = (deg: number, r: number) => ({
    x: Math.round((cx + r * Math.cos(rad(deg))) * 100) / 100,
    y: Math.round((cy + r * Math.sin(rad(deg))) * 100) / 100,
  })

  // Lotus petal from r1 to r2 at angle, with spread width
  const petal = (deg: number, r1: number, r2: number, w: number) => {
    const base = pt(deg, r1)
    const tip  = pt(deg, r2)
    const lc   = pt(deg - w, r1 + (r2 - r1) * 0.55)
    const rc   = pt(deg + w, r1 + (r2 - r1) * 0.55)
    return `M ${base.x} ${base.y} Q ${lc.x} ${lc.y} ${tip.x} ${tip.y} Q ${rc.x} ${rc.y} ${base.x} ${base.y} Z`
  }

  const SALMON  = '#DC6B52'
  const SAFFRON = '#E8960C'
  const RANI    = '#C94980'
  const TEAL    = '#1A7B8A'
  const GOLD    = '#C4882A'
  const IVORY   = '#FDF6F0'

  // 8 angles for main symmetry
  const a8  = Array.from({ length: 8  }, (_, i) => i * 45)
  const a16 = Array.from({ length: 16 }, (_, i) => i * 22.5)
  const a12 = Array.from({ length: 12 }, (_, i) => i * 30)
  const a24 = Array.from({ length: 24 }, (_, i) => i * 15)

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Outer soft glow ── */}
      <circle cx={cx} cy={cy} r={230} fill={SALMON} opacity="0.04" />

      {/* ── Outermost polygon ring ── */}
      <polygon
        points={a24.map(a => `${pt(a, 225).x},${pt(a, 225).y}`).join(' ')}
        stroke={SAFFRON} strokeWidth="0.7" fill="none" opacity="0.2"
      />
      <polygon
        points={a12.map(a => `${pt(a, 215).x},${pt(a, 215).y}`).join(' ')}
        stroke={SALMON} strokeWidth="0.7" fill="none" opacity="0.25"
      />

      {/* ── 12 outer large petals (salmon) ── */}
      {a12.map((a, i) => (
        <path key={`op-${i}`} d={petal(a, 145, 210, 12)}
          stroke={SALMON} strokeWidth="1" fill={SALMON} fillOpacity="0.08" opacity="0.65" />
      ))}

      {/* ── 12 alternate petals offset 15° (saffron) ── */}
      {a12.map((a, i) => (
        <path key={`op2-${i}`} d={petal(a + 15, 155, 200, 10)}
          stroke={SAFFRON} strokeWidth="0.8" fill={SAFFRON} fillOpacity="0.06" opacity="0.55" />
      ))}

      {/* ── Decorative ring at r=138 ── */}
      <circle cx={cx} cy={cy} r={138} stroke={RANI} strokeWidth="0.8" opacity="0.2" />
      <circle cx={cx} cy={cy} r={142} stroke={RANI} strokeWidth="0.4" opacity="0.12" />

      {/* ── 16 dots at r=130 ── */}
      {a16.map((a, i) => {
        const p = pt(a, 130)
        return (
          <circle key={`d16-${i}`} cx={p.x} cy={p.y}
            r={i % 2 === 0 ? 3.5 : 2}
            fill={i % 2 === 0 ? RANI : SAFFRON}
            opacity={i % 2 === 0 ? 0.7 : 0.5} />
        )
      })}

      {/* ── 8 peacock feather eye motifs at r=108 ── */}
      {a8.map((a, i) => {
        const c = pt(a, 108)
        const dx = Math.cos(rad(a)), dy = Math.sin(rad(a))
        return (
          <g key={`eye-${i}`}>
            {/* outer oval */}
            <ellipse cx={c.x} cy={c.y} rx={14} ry={9}
              stroke={TEAL} strokeWidth="1" fill={TEAL} fillOpacity="0.08" opacity="0.7"
              transform={`rotate(${a}, ${c.x}, ${c.y})`} />
            {/* mid ring */}
            <ellipse cx={c.x} cy={c.y} rx={9} ry={5.5}
              stroke={RANI} strokeWidth="0.8" fill={RANI} fillOpacity="0.1" opacity="0.7"
              transform={`rotate(${a}, ${c.x}, ${c.y})`} />
            {/* center dot */}
            <circle cx={c.x} cy={c.y} r={2.5} fill={SAFFRON} opacity="0.85" />
            {/* tail stroke outward */}
            <line
              x1={c.x + dx * 10} y1={c.y + dy * 10}
              x2={c.x + dx * 24} y2={c.y + dy * 24}
              stroke={TEAL} strokeWidth="0.8" opacity="0.4" />
          </g>
        )
      })}

      {/* ── Ring at r=85 ── */}
      <circle cx={cx} cy={cy} r={85} stroke={GOLD} strokeWidth="1" opacity="0.3" />

      {/* ── 8 Mughal mini arch shapes at r=70 ── */}
      {a8.map((a, i) => {
        const tip = pt(a, 82), base = pt(a, 58)
        const lw = pt(a - 8, 65), rw = pt(a + 8, 65)
        return (
          <path key={`arch-${i}`}
            d={`M ${base.x} ${base.y} L ${lw.x} ${lw.y} Q ${tip.x} ${tip.y} ${rw.x} ${rw.y} L ${base.x} ${base.y}`}
            stroke={SALMON} strokeWidth="1.1" fill={SALMON} fillOpacity="0.12" opacity="0.75" />
        )
      })}

      {/* ── 8 offset small diamonds at r=70 ── */}
      {a8.map((a, i) => {
        const c = pt(a + 22.5, 70)
        return (
          <polygon key={`dmd-${i}`}
            points={`${pt(a+22.5,76).x},${pt(a+22.5,76).y} ${pt(a+27,70).x},${pt(a+27,70).y} ${pt(a+22.5,64).x},${pt(a+22.5,64).y} ${pt(a+18,70).x},${pt(a+18,70).y}`}
            stroke={SAFFRON} strokeWidth="0.8" fill="none" opacity="0.6" />
        )
      })}

      {/* ── Inner ring ── */}
      <circle cx={cx} cy={cy} r={52} stroke={RANI} strokeWidth="0.8" opacity="0.3" />
      <circle cx={cx} cy={cy} r={48} stroke={RANI} strokeWidth="0.4" opacity="0.15" />

      {/* ── 8 inner petals (rani pink, some fill) ── */}
      {a8.map((a, i) => (
        <path key={`ip-${i}`} d={petal(a, 20, 48, 14)}
          stroke={RANI} strokeWidth="1" fill={RANI} fillOpacity="0.12" opacity="0.75" />
      ))}

      {/* ── 8 alternate inner petals (salmon) ── */}
      {a8.map((a, i) => (
        <path key={`ip2-${i}`} d={petal(a + 22.5, 20, 44, 11)}
          stroke={SALMON} strokeWidth="0.8" fill={SALMON} fillOpacity="0.08" opacity="0.6" />
      ))}

      {/* ── Center lotus (filled saffron) ── */}
      {a8.map((a, i) => (
        <path key={`cl-${i}`} d={petal(a, 0, 22, 10)}
          stroke={GOLD} strokeWidth="1" fill={SAFFRON} fillOpacity="0.35" opacity="0.9" />
      ))}

      {/* ── Center circle ── */}
      <circle cx={cx} cy={cy} r={10} fill={SAFFRON} opacity="0.85" />
      <circle cx={cx} cy={cy} r={5}  fill={GOLD}    opacity="0.9" />
      <circle cx={cx} cy={cy} r={2}  fill={IVORY}   opacity="1" />

      {/* ── 8 dot accents between inner petals ── */}
      {a8.map((a, i) => {
        const p = pt(a + 22.5, 55)
        return <circle key={`ia-${i}`} cx={p.x} cy={p.y} r={2.2} fill={SAFFRON} opacity="0.6" />
      })}
    </svg>
  )
}
