'use client'

import { motion } from 'framer-motion'

const SALMON  = '#DC6B52'
const SAFFRON = '#E8960C'
const RANI    = '#C94980'
const TEAL    = '#1A7B8A'
const GOLD    = '#C4882A'
const UMBER   = '#3D1F14'

// Floating decorative shapes scattered around
const floaters = [
  { x: 68,  y: 160, shape: 'diamond', color: SALMON,  size: 7,  delay: 0,   dur: 4.5 },
  { x: 400, y: 200, shape: 'dot',     color: SAFFRON, size: 5,  delay: 0.8, dur: 3.8 },
  { x: 55,  y: 320, shape: 'dot',     color: RANI,    size: 4,  delay: 1.6, dur: 5.2 },
  { x: 415, y: 370, shape: 'diamond', color: RANI,    size: 6,  delay: 2.2, dur: 4.1 },
  { x: 80,  y: 450, shape: 'dot',     color: TEAL,    size: 3,  delay: 0.4, dur: 6   },
  { x: 395, y: 130, shape: 'diamond', color: TEAL,    size: 5,  delay: 3,   dur: 5   },
  { x: 130, y: 100, shape: 'dot',     color: GOLD,    size: 3,  delay: 1.2, dur: 4.8 },
  { x: 350, y: 480, shape: 'dot',     color: SALMON,  size: 4,  delay: 2.6, dur: 5.5 },
  { x: 170, y: 510, shape: 'diamond', color: SAFFRON, size: 5,  delay: 1.8, dur: 3.6 },
  { x: 310, y: 100, shape: 'dot',     color: RANI,    size: 3,  delay: 0.6, dur: 4.3 },
]

// Lotus petal path helper
function petalPath(cx: number, cy: number, angle: number, r1: number, r2: number, w: number) {
  const toRad = (d: number) => (d - 90) * Math.PI / 180
  const pt = (d: number, r: number) => ({
    x: Math.round((cx + r * Math.cos(toRad(d))) * 100) / 100,
    y: Math.round((cy + r * Math.sin(toRad(d))) * 100) / 100,
  })
  const base = pt(angle, r1)
  const tip  = pt(angle, r2)
  const lc   = pt(angle - w, r1 + (r2 - r1) * 0.55)
  const rc   = pt(angle + w, r1 + (r2 - r1) * 0.55)
  return `M ${base.x} ${base.y} Q ${lc.x} ${lc.y} ${tip.x} ${tip.y} Q ${rc.x} ${rc.y} ${base.x} ${base.y} Z`
}

export default function AnimatedHeroPanel() {
  const cx = 240, cy = 290

  const outerPetals = Array.from({ length: 12 }, (_, i) => i * 30)
  const innerPetals = Array.from({ length: 8  }, (_, i) => i * 45)

  return (
    <svg
      width="480"
      height="560"
      viewBox="0 0 480 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      {/* ── Soft ambient glow ── */}
      <motion.ellipse
        cx={cx} cy={cy} rx={190} ry={200}
        fill={SALMON} fillOpacity="0"
        animate={{ fillOpacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Outer orbit ring (rotates slowly) ── */}
      <motion.g
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      >
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i * 15 - 90) * Math.PI / 180
          const x = cx + 210 * Math.cos(a), y = cy + 210 * Math.sin(a)
          return (
            <circle key={i} cx={x} cy={y}
              r={i % 3 === 0 ? 2.5 : 1.2}
              fill={[SALMON, SAFFRON, RANI, TEAL][i % 4]}
              opacity={i % 3 === 0 ? 0.45 : 0.22}
            />
          )
        })}
      </motion.g>

      {/* ── Counter-rotating ring ── */}
      <motion.g
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
      >
        {Array.from({ length: 16 }, (_, i) => {
          const a = (i * 22.5 - 90) * Math.PI / 180
          const x = cx + 170 * Math.cos(a), y = cy + 170 * Math.sin(a)
          return (
            <polygon key={i}
              points={`${x},${y-4} ${x+3},${y} ${x},${y+4} ${x-3},${y}`}
              fill={i % 2 === 0 ? RANI : SAFFRON}
              opacity="0.5"
            />
          )
        })}
      </motion.g>

      {/* ── Mughal arch — draws itself in ── */}
      <motion.path
        d="M 100 520 L 100 280 C 100 168 132 108 168 78 C 192 58 215 48 240 46 C 265 48 288 58 312 78 C 348 108 380 168 380 280 L 380 520"
        stroke={SALMON} strokeWidth="1.8" fill="none" opacity="0.6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.2 }}
      />
      {/* Inner arch */}
      <motion.path
        d="M 122 520 L 122 288 C 122 185 148 130 178 102 C 200 82 219 74 240 72 C 261 74 280 82 302 102 C 332 130 358 185 358 288 L 358 520"
        stroke={SALMON} strokeWidth="0.9" fill="none" opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* ── Keystone ── */}
      <motion.path
        d="M 240 46 L 248 34 L 240 22 L 232 34 Z"
        stroke={SAFFRON} strokeWidth="1.2" fill={SAFFRON} fillOpacity="0.3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        style={{ transformOrigin: '240px 34px' }}
      />

      {/* ── Crown rays ── */}
      {[-35, -18, 0, 18, 35].map((deg, i) => {
        const a = (deg - 90) * Math.PI / 180
        const x1 = 240 + 16 * Math.cos(a), y1 = 46 + 16 * Math.sin(a)
        const x2 = 240 + 32 * Math.cos(a), y2 = 46 + 32 * Math.sin(a)
        return (
          <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={SAFFRON} strokeWidth="0.9" opacity="0.55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            transition={{ delay: 2.3 + i * 0.06 }}
          />
        )
      })}

      {/* ── Arch base ── */}
      <motion.line x1="82" y1="520" x2="398" y2="520"
        stroke={SALMON} strokeWidth="1" opacity="0.4"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 2.1 }}
        style={{ transformOrigin: '240px 520px' }}
      />

      {/* ── 12 outer lotus petals (bloom in) ── */}
      {outerPetals.map((angle, i) => {
        const colors = [SALMON, RANI, SAFFRON]
        const color = colors[i % 3]
        return (
          <motion.path key={`op-${i}`}
            d={petalPath(cx, cy, angle, 68, 130, 13)}
            stroke={color} strokeWidth="1" fill={color} fillOpacity="0.1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 0.7, delay: 1 + i * 0.06, ease: 'backOut' }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        )
      })}

      {/* ── 8 inner petals (rani pink) ── */}
      {innerPetals.map((angle, i) => (
        <motion.path key={`ip-${i}`}
          d={petalPath(cx, cy, angle, 20, 65, 14)}
          stroke={RANI} strokeWidth="1" fill={RANI} fillOpacity="0.15"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.6, delay: 1.5 + i * 0.07, ease: 'backOut' }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}

      {/* ── 8 alternate inner petals (saffron) ── */}
      {innerPetals.map((angle, i) => (
        <motion.path key={`ip2-${i}`}
          d={petalPath(cx, cy, angle + 22.5, 20, 55, 11)}
          stroke={SAFFRON} strokeWidth="0.8" fill={SAFFRON} fillOpacity="0.1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.65 }}
          transition={{ duration: 0.6, delay: 1.7 + i * 0.07, ease: 'backOut' }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}

      {/* ── Center lotus (pulses) ── */}
      <motion.circle cx={cx} cy={cy} r={18}
        fill={SAFFRON} opacity="0.85"
        animate={{ r: [18, 20, 18], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ scale: 0 }}
      />
      <motion.circle cx={cx} cy={cy} r={10}
        fill={GOLD}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.95 }}
        transition={{ delay: 2, duration: 0.5 }}
      />
      <motion.circle cx={cx} cy={cy} r={4}
        fill="#FDF6F0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.1, duration: 0.4 }}
      />

      {/* ── Floating scattered elements ── */}
      {floaters.map((f, i) => (
        <motion.g key={i}
          animate={{ y: [0, -10, 0], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: f.dur, repeat: Infinity, ease: 'easeInOut', delay: f.delay }}
        >
          {f.shape === 'diamond' ? (
            <polygon
              points={`${f.x},${f.y - f.size} ${f.x + f.size * 0.7},${f.y} ${f.x},${f.y + f.size} ${f.x - f.size * 0.7},${f.y}`}
              stroke={f.color} strokeWidth="1" fill="none" opacity="0.7"
            />
          ) : (
            <circle cx={f.x} cy={f.y} r={f.size} fill={f.color} opacity="0.6" />
          )}
        </motion.g>
      ))}

      {/* ── Teal ring between arch pillars and lotus ── */}
      <motion.circle cx={cx} cy={cy} r={145}
        stroke={TEAL} strokeWidth="0.7" fill="none" opacity="0.18"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.18 }}
        transition={{ duration: 1, delay: 0.9 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />

      {/* ── Thin decorative rule at base inside arch ── */}
      <motion.path
        d={`M 122 490 Q 240 498 358 490`}
        stroke={SALMON} strokeWidth="0.7" fill="none" opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
      />

      {/* ── Side column dots ── */}
      {[200, 260, 320, 380, 440].map((y, i) => (
        <g key={i}>
          <motion.circle cx={102} cy={y} r={1.8}
            fill={SALMON} opacity="0.25"
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          />
          <motion.circle cx={378} cy={y} r={1.8}
            fill={SALMON} opacity="0.25"
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 + 0.2 }}
          />
        </g>
      ))}

      {/* ── Paisley accents ── */}
      {[
        { x: 150, y: 430, rot: -20, color: RANI },
        { x: 330, y: 175, rot: 25, color: SAFFRON },
      ].map((p, i) => (
        <motion.g key={i}
          style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.55, rotate: p.rot, y: [0, -6, 0] }}
          transition={{
            opacity: { delay: 1.5 + i * 0.5, duration: 0.6 },
            rotate: { delay: 1.5 + i * 0.5, duration: 0.6 },
            y: { duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 },
          }}
        >
          <path
            d={`M ${p.x} ${p.y + 10} C ${p.x-8} ${p.y+4} ${p.x-9} ${p.y-6} ${p.x-2} ${p.y-12} C ${p.x+4} ${p.y-16} ${p.x+10} ${p.y-12} ${p.x+8} ${p.y-4} C ${p.x+6} ${p.y+2} ${p.x+2} ${p.y+6} ${p.x} ${p.y+10} Z`}
            stroke={p.color} strokeWidth="1" fill={p.color} fillOpacity="0.12"
          />
          <circle cx={p.x} cy={p.y - 6} r="1.5" fill={p.color} opacity="0.6" />
        </motion.g>
      ))}
    </svg>
  )
}
