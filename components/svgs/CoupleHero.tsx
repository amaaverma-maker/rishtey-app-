export default function CoupleHero({ width = 480, height = 560 }: { width?: number; height?: number }) {
  const SALMON   = '#DC6B52'
  const SAFFRON  = '#E8960C'
  const RANI     = '#C94980'
  const UMBER    = '#3D1F14'
  const GOLD     = '#C4882A'
  const IVORY    = '#FDF6F0'
  const TEAL     = '#1A7B8A'

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 480 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Decorative arch frame ── */}
      <path
        d="M 60 520 L 60 260 C 60 150 100 90 140 62 C 168 44 202 34 240 32 C 278 34 312 44 340 62 C 380 90 420 150 420 260 L 420 520"
        stroke={SALMON} strokeWidth="1.5" fill="none" opacity="0.5"
      />
      <path
        d="M 80 520 L 80 268 C 80 165 115 108 152 80 C 177 62 207 54 240 52 C 273 54 303 62 328 80 C 365 108 400 165 400 268 L 400 520"
        stroke={SALMON} strokeWidth="0.8" fill="none" opacity="0.25"
      />

      {/* Keystone diamond */}
      <path d="M 240 32 L 248 22 L 240 12 L 232 22 Z" stroke={SAFFRON} strokeWidth="1" fill={SAFFRON} fillOpacity="0.3" opacity="0.8" />
      {/* Crown rays */}
      {[-40,-20,0,20,40].map((deg, i) => {
        const a = (deg - 90) * Math.PI / 180
        const x1 = 240 + 14 * Math.cos(a), y1 = 32 + 14 * Math.sin(a)
        const x2 = 240 + 28 * Math.cos(a), y2 = 32 + 28 * Math.sin(a)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={SAFFRON} strokeWidth="0.8" opacity="0.5" />
      })}

      {/* Arch base */}
      <line x1="44" y1="520" x2="436" y2="520" stroke={SALMON} strokeWidth="1" opacity="0.4" />
      <line x1="52" y1="528" x2="428" y2="528" stroke={SALMON} strokeWidth="0.6" opacity="0.2" />

      {/* Corner finials */}
      <path d="M 44 520 L 44 508 L 58 508" stroke={SALMON} strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M 436 520 L 436 508 L 422 508" stroke={SALMON} strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* ── Marigold garland across top ── */}
      {Array.from({ length: 13 }, (_, i) => {
        const t = i / 12
        const x = 100 + t * 280
        const y = 95 + Math.sin(t * Math.PI) * (-18) + 12
        const r = 7
        const color = i % 2 === 0 ? SAFFRON : SALMON
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={r} fill={color} fillOpacity="0.55" />
            <circle cx={x} cy={y} r={r * 0.5} fill={color} fillOpacity="0.4" />
            {i < 12 && (
              <line
                x1={x + r * 0.8} y1={y}
                x2={100 + ((i+1)/12)*280 - r * 0.8} y2={95 + Math.sin(((i+1)/12) * Math.PI) * (-18) + 12}
                stroke={GOLD} strokeWidth="0.7" opacity="0.35"
              />
            )}
          </g>
        )
      })}

      {/* ── GROOM (left) ── */}

      {/* Churidar / legs */}
      <path d="M 162 455 L 155 520 M 178 455 L 175 520" stroke={UMBER} strokeWidth="3" strokeLinecap="round" opacity="0.85" />

      {/* Sherwani body */}
      <path
        d="M 148 290 L 138 455 L 200 455 L 192 290 Z"
        fill={UMBER} opacity="0.88"
      />
      {/* Sherwani decorative border at hem */}
      <path d="M 138 440 L 200 440" stroke={SALMON} strokeWidth="1.2" opacity="0.7" />
      {/* Sherwani front buttons */}
      {[310, 340, 370, 400, 430].map((y, i) => (
        <circle key={i} cx={170} cy={y} r="2" fill={SAFFRON} opacity="0.7" />
      ))}
      {/* Sherwani collar */}
      <path d="M 158 295 Q 170 280 182 295" stroke={SAFFRON} strokeWidth="1" fill="none" opacity="0.8" />

      {/* Arms — groom reaching slightly right */}
      <path d="M 148 320 Q 120 360 130 390" stroke={UMBER} strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M 192 320 Q 220 355 215 385" stroke={UMBER} strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.85" />

      {/* Groom hand reaching toward bride */}
      <path d="M 215 385 Q 228 378 232 372" stroke={UMBER} strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.75" />

      {/* Neck */}
      <rect x="163" y="268" width="14" height="26" rx="6" fill={UMBER} opacity="0.7" />

      {/* Groom head */}
      <ellipse cx="170" cy="248" rx="22" ry="26" fill={UMBER} opacity="0.82" />

      {/* Turban */}
      <path
        d="M 148 240 Q 148 210 170 205 Q 192 210 192 240"
        fill={SALMON} opacity="0.9"
      />
      {/* Turban layers */}
      <path d="M 149 232 Q 170 222 191 232" stroke={SAFFRON} strokeWidth="1.2" fill="none" opacity="0.7" />
      <path d="M 150 224 Q 170 215 190 224" stroke={SAFFRON} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Sarpech / Kalgi ornament */}
      <path d="M 170 205 L 168 192 Q 165 182 170 176 Q 175 182 172 192 Z" stroke={GOLD} strokeWidth="1" fill={GOLD} fillOpacity="0.5" opacity="0.9" />
      <circle cx="170" cy="175" r="3" fill={SAFFRON} opacity="0.9" />

      {/* Groom face (minimal — stylised) */}
      <circle cx="163" cy="248" r="2" fill={IVORY} opacity="0.6" /> {/* eye */}
      <circle cx="177" cy="248" r="2" fill={IVORY} opacity="0.6" /> {/* eye */}

      {/* ── BRIDE (right) ── */}

      {/* Lehenga / skirt */}
      <path
        d="M 282 340 Q 268 455 256 520 L 320 520 Q 314 455 298 340 Z"
        fill={RANI} opacity="0.75"
      />
      {/* Lehenga folds */}
      {[0.2, 0.4, 0.6, 0.8].map((t, i) => {
        const x = 256 + t * 64
        return <line key={i} x1={x} y1={340 + t * 30} x2={x - 4 + t * 8} y2={520} stroke={SALMON} strokeWidth="0.7" opacity="0.35" />
      })}
      {/* Lehenga hem border */}
      <path d="M 256 510 Q 288 505 320 510" stroke={SAFFRON} strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Lehenga decorative dots */}
      {[268, 278, 288, 298, 308].map((x, i) => (
        <circle key={i} cx={x} cy={420 + i * 12} r="2" fill={SAFFRON} opacity="0.5" />
      ))}

      {/* Choli / blouse body */}
      <path
        d="M 278 295 L 272 342 L 308 342 L 302 295 Z"
        fill={SALMON} opacity="0.85"
      />
      {/* Choli border */}
      <path d="M 272 338 L 308 338" stroke={SAFFRON} strokeWidth="1" opacity="0.6" />

      {/* Arms — bride */}
      <path d="M 278 315 Q 252 348 252 380" stroke={RANI} strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.75" />
      <path d="M 302 315 Q 325 348 320 375" stroke={RANI} strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.75" />

      {/* Bride hand reaching toward groom */}
      <path d="M 252 380 Q 244 374 238 370" stroke={RANI} strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Bangles */}
      <circle cx="252" cy="373" r="5" stroke={GOLD} strokeWidth="1.5" fill="none" opacity="0.8" />
      <circle cx="252" cy="367" r="5" stroke={SAFFRON} strokeWidth="1" fill="none" opacity="0.6" />

      {/* Dupatta */}
      <path
        d="M 278 295 Q 295 230 340 210 Q 360 205 365 220 Q 355 230 330 240 Q 310 255 305 295"
        fill={RANI} opacity="0.35"
      />
      <path
        d="M 278 295 Q 295 230 340 210"
        stroke={RANI} strokeWidth="1.2" fill="none" opacity="0.6"
      />
      {/* Dupatta border */}
      <path
        d="M 280 290 Q 297 228 340 210"
        stroke={SAFFRON} strokeWidth="0.8" fill="none" opacity="0.5" strokeDasharray="3 4"
      />

      {/* Neck */}
      <rect x="284" y="268" width="12" height="30" rx="5" fill={UMBER} opacity="0.55" />

      {/* Bride head */}
      <ellipse cx="290" cy="248" rx="20" ry="24" fill={UMBER} opacity="0.72" />

      {/* Hair bun */}
      <ellipse cx="296" cy="228" rx="12" ry="9" fill={UMBER} opacity="0.8" />
      <circle cx="296" cy="222" r="4" fill={SALMON} opacity="0.7" />

      {/* Maang tikka */}
      <line x1="290" y1="228" x2="290" y2="218" stroke={GOLD} strokeWidth="0.8" opacity="0.9" />
      <circle cx="290" cy="217" r="3" fill={SAFFRON} opacity="0.9" />

      {/* Bride face */}
      <circle cx="284" cy="249" r="2" fill={IVORY} opacity="0.55" />
      <circle cx="296" cy="249" r="2" fill={IVORY} opacity="0.55" />
      {/* Bindi */}
      <circle cx="290" cy="240" r="2.5" fill={RANI} opacity="0.85" />

      {/* Necklace */}
      <path d="M 280 285 Q 290 294 300 285" stroke={GOLD} strokeWidth="1.2" fill="none" opacity="0.7" />
      {[284, 290, 296].map((x, i) => (
        <circle key={i} cx={x} cy={291} r="1.5" fill={SAFFRON} opacity="0.6" />
      ))}

      {/* ── Thread / connection between hands ── */}
      <path
        d="M 232 372 Q 235 395 238 370"
        stroke={SALMON} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.8"
      />

      {/* ── Lotus between them at hand level ── */}
      {[-25,-15,0,15,25].map((deg, i) => {
        const a = (deg - 90) * Math.PI / 180
        const px = 240 + 14 * Math.cos(a), py = 390 + 14 * Math.sin(a)
        return (
          <path key={i}
            d={`M 240 390 Q ${240 + 8 * Math.cos(a - 0.4)} ${390 + 8 * Math.sin(a - 0.4)} ${px} ${py} Q ${240 + 8 * Math.cos(a + 0.4)} ${390 + 8 * Math.sin(a + 0.4)} 240 390`}
            stroke={SAFFRON} strokeWidth="1" fill={SAFFRON} fillOpacity="0.25" opacity="0.8"
          />
        )
      })}
      <circle cx="240" cy="390" r="4" fill={SAFFRON} opacity="0.8" />

      {/* ── Decorative dots framing ── */}
      {[120, 160, 200, 240, 280, 320, 360, 400].map((y, i) => (
        <g key={i}>
          <circle cx="68" cy={y} r="1.5" fill={SALMON} opacity="0.2" />
          <circle cx="412" cy={y} r="1.5" fill={SALMON} opacity="0.2" />
        </g>
      ))}

      {/* ── Small flower accents at arch base corners ── */}
      {/* Left flower */}
      {[0,60,120,180,240,300].map((deg, i) => {
        const a = deg * Math.PI / 180
        const px = 100 + 8 * Math.cos(a), py = 510 + 8 * Math.sin(a)
        return <circle key={i} cx={px} cy={py} r="3" fill={i % 2 === 0 ? RANI : SAFFRON} opacity="0.5" />
      })}
      {/* Right flower */}
      {[0,60,120,180,240,300].map((deg, i) => {
        const a = deg * Math.PI / 180
        const px = 380 + 8 * Math.cos(a), py = 510 + 8 * Math.sin(a)
        return <circle key={i} cx={px} cy={py} r="3" fill={i % 2 === 0 ? TEAL : SAFFRON} opacity="0.5" />
      })}
    </svg>
  )
}
