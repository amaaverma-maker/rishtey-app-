'use client'

import { motion } from 'framer-motion'
import { scrollTo } from './SmoothScroll'
import RangoliDivider from './svgs/RangoliDivider'
import Image from 'next/image'
import { useIsMobile } from '../hooks/useIsMobile'

const headlineWords = ['Where Tradition', 'Meets the', 'Right Person.']

function ArchFrame() {
  return (
    <svg
      width="480"
      height="560"
      viewBox="0 0 480 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Warm ambient fill behind arch */}
      <ellipse cx="240" cy="300" rx="180" ry="220" fill="#DC6B52" opacity="0.05" />

      {/* Outer arch — main frame */}
      <path
        d="M 80 520 L 80 280 C 80 160 112 100 148 72 C 174 52 206 40 240 38 C 274 40 306 52 332 72 C 368 100 400 160 400 280 L 400 520"
        stroke="#DC6B52" strokeWidth="1.5" fill="none" opacity="0.45"
      />

      {/* Inner cusped arch */}
      <path
        d="M 108 520 L 108 288 C 108 205 126 148 154 112 Q 170 96 186 80 Q 208 58 240 56 Q 272 58 294 80 Q 310 96 326 112 C 354 148 372 205 372 288 L 372 520"
        stroke="#DC6B52" strokeWidth="1" fill="none" opacity="0.3"
      />

      {/* Keystone triangle */}
      <path d="M 220 38 L 240 16 L 260 38" stroke="#DC6B52" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Keystone gem */}
      <path d="M 240 16 L 246 10 L 240 4 L 234 10 Z" stroke="#DC6B52" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Arch crown rays — radiating from keystone */}
      {Array.from({ length: 9 }, (_, i) => {
        const spread = 120
        const startAngle = -90 - spread / 2
        const angle = (startAngle + i * (spread / 8)) * (Math.PI / 180)
        const cx = 240, cy = 38
        const r1 = 18, r2 = 42
        return (
          <line
            key={i}
            x1={Math.round((cx + r1 * Math.cos(angle)) * 1e4) / 1e4}
            y1={Math.round((cy + r1 * Math.sin(angle)) * 1e4) / 1e4}
            x2={Math.round((cx + r2 * Math.cos(angle)) * 1e4) / 1e4}
            y2={Math.round((cy + r2 * Math.sin(angle)) * 1e4) / 1e4}
            stroke="#DC6B52" strokeWidth="0.8" opacity="0.35"
          />
        )
      })}

      {/* Arch pillar column marks */}
      <line x1="80" y1="520" x2="80" y2="540" stroke="#DC6B52" strokeWidth="1.5" opacity="0.4" />
      <line x1="400" y1="520" x2="400" y2="540" stroke="#DC6B52" strokeWidth="1.5" opacity="0.4" />
      <line x1="60" y1="520" x2="420" y2="520" stroke="#DC6B52" strokeWidth="0.8" opacity="0.3" />
      <line x1="68" y1="530" x2="412" y2="530" stroke="#DC6B52" strokeWidth="0.5" opacity="0.2" />

      {/* Corner ornaments at base */}
      <path d="M 60 520 L 60 510 L 72 510" stroke="#DC6B52" strokeWidth="0.8" fill="none" opacity="0.35" />
      <path d="M 420 520 L 420 510 L 408 510" stroke="#DC6B52" strokeWidth="0.8" fill="none" opacity="0.35" />

      {/* Diamond at base center */}
      <path d="M 240 540 L 246 534 L 240 528 L 234 534 Z" stroke="#DC6B52" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* ---- Hands thread illustration, centered in the arch ---- */}
      {/* Positioned inside the arch ~ centered at (240, 310) */}
      <g transform="translate(20, 80)">
        {/* Left hand — reaching from left */}
        <path d="M 30 320 C 40 310 50 305 60 308" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 28 328 C 38 318 50 313 62 316" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 30 320 Q 26 324 28 328" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 60 308 C 75 306 85 308 90 312 C 95 316 96 322 93 328 C 90 334 82 336 72 335 C 62 334 55 328 55 322 C 55 318 57 316 60 314" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 90 312 C 105 306 125 300 148 298" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 93 318 C 108 313 126 308 148 307" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 148 298 Q 152 302 148 307" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 88 322 C 103 318 120 316 140 318" stroke="#3D1F14" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M 85 328 C 96 326 108 326 120 328" stroke="#3D1F14" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />

        {/* Right hand — reaching from right */}
        <path d="M 410 160 C 400 150 390 145 380 148" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 412 168 C 402 158 392 153 380 156" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 410 160 Q 414 164 412 168" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 380 148 C 365 146 355 148 350 152 C 345 156 344 162 347 168 C 350 174 358 176 368 175 C 378 174 385 168 385 162 C 385 158 383 156 380 154" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 350 152 C 335 146 315 140 292 138" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 347 158 C 332 153 314 148 292 147" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 292 138 Q 288 142 292 147" stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M 352 162 C 337 158 320 156 300 158" stroke="#3D1F14" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M 355 168 C 344 166 332 166 320 168" stroke="#3D1F14" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />

        {/* The thread — catenary */}
        <path
          d="M 148 302 C 180 340 220 370 260 370 C 290 370 295 330 292 142"
          stroke="#DC6B52" strokeWidth="1.2" strokeLinecap="round" fill="none"
        />

        {/* Lotus at thread low point */}
        <path d="M 220 365 C 215 355 210 350 218 345 C 220 343 222 343 224 345 C 232 350 227 355 222 365 Z" stroke="#E8960C" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.9" />
        <path d="M 218 362 C 210 355 206 348 212 342 C 214 340 217 340 218 342 C 220 346 219 354 218 362" stroke="#E8960C" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.9" />
        <path d="M 222 362 C 230 355 234 348 228 342 C 226 340 223 340 222 342 C 220 346 221 354 222 362" stroke="#E8960C" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.9" />
        <circle cx="220" cy="362" r="2" stroke="#E8960C" strokeWidth="1" fill="none" opacity="0.9" />

        {/* Jasmine sprig */}
        <path d="M 185 355 C 183 350 181 347 184 344" stroke="#DC6B52" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.8" />
        <circle cx="184" cy="343" r="2.5" stroke="#DC6B52" strokeWidth="0.8" fill="none" opacity="0.8" />
        <path d="M 183 342 C 181 339 180 337 182 335" stroke="#DC6B52" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.7" />
        <circle cx="182" cy="334" r="1.5" stroke="#DC6B52" strokeWidth="0.8" fill="none" opacity="0.7" />

        {/* Paisleys */}
        <path d="M 255 368 C 250 362 248 354 252 348 C 254 345 258 344 260 347 C 263 351 261 360 255 368 Z" stroke="#DC6B52" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M 170 348 C 166 342 165 335 169 330 C 171 328 174 328 175 330 C 177 334 175 343 170 348 Z" stroke="#DC6B52" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.7" />

        {/* Dots */}
        <circle cx="200" cy="348" r="1" fill="#DC6B52" opacity="0.5" />
        <circle cx="242" cy="368" r="1" fill="#DC6B52" opacity="0.5" />
        <circle cx="265" cy="355" r="0.8" fill="#DC6B52" opacity="0.4" />
      </g>

      {/* Subtle inner decorative rings near arch crown */}
      <circle cx="240" cy="56" r="8" stroke="#DC6B52" strokeWidth="0.6" fill="none" opacity="0.25" />
      <circle cx="240" cy="56" r="14" stroke="#DC6B52" strokeWidth="0.5" fill="none" opacity="0.15" />

      {/* Flanking dots at arch sides */}
      <circle cx="80" cy="200" r="2" fill="#DC6B52" opacity="0.2" />
      <circle cx="400" cy="200" r="2" fill="#DC6B52" opacity="0.2" />
      <circle cx="80" cy="360" r="1.5" fill="#DC6B52" opacity="0.15" />
      <circle cx="400" cy="360" r="1.5" fill="#DC6B52" opacity="0.15" />
    </svg>
  )
}

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <>
      <section
        id="hero"
        style={{
          minHeight: '100vh',
          backgroundColor: '#FDF6F0',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        {/* Background — Star Compass top-right (hidden on mobile) */}
        {!isMobile && (
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-150px',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <StarCompassBg />
          </div>
        )}

        {/* Background gradient blob bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-100px',
            width: isMobile ? '300px' : '600px',
            height: isMobile ? '200px' : '400px',
            background: 'radial-gradient(ellipse at center, rgba(220,107,82,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Layout */}
        <div
          className="hero-layout"
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            width: '100%',
            minHeight: '100vh',
            position: 'relative',
            zIndex: 1,
            alignItems: 'stretch',
          }}
        >
          {/* Left / top column — text */}
          <div
            className="hero-text"
            style={{
              width: isMobile ? '100%' : '52%',
              paddingLeft: isMobile ? '6vw' : '8vw',
              paddingRight: isMobile ? '6vw' : '4vw',
              paddingTop: isMobile ? '96px' : '120px',
              paddingBottom: isMobile ? '48px' : '80px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              style={{
                fontFamily: 'var(--font-urbanist), sans-serif',
                fontWeight: 200,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.35em',
                color: '#DC6B52',
                marginBottom: isMobile ? '24px' : '36px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <svg width="20" height="1" viewBox="0 0 20 1" aria-hidden="true">
                <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="#DC6B52" strokeWidth="0.8" />
              </svg>
              South Asian Matchmaking
              <svg width="20" height="1" viewBox="0 0 20 1" aria-hidden="true">
                <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="#DC6B52" strokeWidth="0.8" />
              </svg>
            </motion.div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: isMobile ? 'clamp(44px, 11vw, 68px)' : 'clamp(68px, 7.5vw, 112px)',
                lineHeight: 0.9,
                color: '#3D1F14',
                marginBottom: isMobile ? '24px' : '36px',
                overflow: 'hidden',
              }}
            >
              {headlineWords.map((word, i) => (
                <span
                  key={word}
                  style={{ display: 'block', overflow: 'hidden' }}
                >
                  <motion.span
                    style={{ display: 'block' }}
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.75, delay: 0.1 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              style={{
                height: '1px',
                width: '48px',
                background: '#DC6B52',
                marginBottom: isMobile ? '20px' : '28px',
                transformOrigin: 'left',
                opacity: 0.6,
              }}
            />

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{
                fontFamily: 'var(--font-urbanist), sans-serif',
                fontWeight: 300,
                fontSize: isMobile ? '15px' : '17px',
                lineHeight: 1.8,
                color: 'rgba(61,31,20,0.65)',
                maxWidth: '360px',
                marginBottom: isMobile ? '36px' : '52px',
              }}
            >
              Rishtey is a boutique matchmaking
              house. We meet you. We know you.
              Then we find them.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '24px' : '40px',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="/biodata"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#DC6B52',
                  color: '#FDF6F0',
                  fontFamily: 'var(--font-urbanist), sans-serif',
                  fontWeight: 300,
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  padding: isMobile ? '14px 28px' : '15px 38px',
                  textDecoration: 'none',
                  transition: 'background-color 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#B85240')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#DC6B52')}
              >
                Begin Your Journey
              </a>

              <a
                href="#process"
                onClick={(e) => { e.preventDefault(); scrollTo('#process') }}
                className="see-how"
                style={{
                  fontFamily: 'var(--font-urbanist), sans-serif',
                  fontWeight: 300,
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  color: '#DC6B52',
                  textDecoration: 'none',
                  position: 'relative',
                  paddingBottom: '3px',
                }}
              >
                See How It Works
                <style>{`
                  .see-how::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 0;
                    width: 100%; height: 1px;
                    background: #DC6B52;
                    transform: scaleX(1);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                  }
                  .see-how:hover::after { transform: scaleX(0); transform-origin: right; }
                  .see-how:hover { opacity: 0.7; }
                `}</style>
              </a>
            </motion.div>
          </div>

          {/* Right / bottom column — image */}
          <motion.div
            className="hero-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            style={{
              width: isMobile ? '100%' : '48%',
              position: 'relative',
              minHeight: isMobile ? '56vw' : '100vh',
              maxHeight: isMobile ? '340px' : 'none',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <Image
              src="https://images.pexels.com/photos/12200847/pexels-photo-12200847.jpeg?auto=compress&cs=tinysrgb&w=1080"
              alt="Indian bride and groom hands with mehndi during wedding ceremony"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center center' }}
              priority
            />
            {/* Fade overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: isMobile
                ? 'linear-gradient(to bottom, #FDF6F0 0%, transparent 15%, transparent 85%, #FDF6F0 100%)'
                : 'linear-gradient(to right, #FDF6F0 0%, rgba(253,246,240,0.3) 25%, transparent 50%), linear-gradient(to top, #FDF6F0 0%, transparent 15%)',
              pointerEvents: 'none',
            }} />
            {/* Warm salmon tint */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(220,107,82,0.08)',
              pointerEvents: 'none',
            }} />
          </motion.div>
        </div>
      </section>

      <RangoliDivider bg="#FDF6F0" />
    </>
  )
}

// Inline the small StarCompass background to avoid importing the file-level component
function StarCompassBg() {
  const cx = 350, cy = 350, outerR = 320, innerR = 130, midR = 220
  const p = (n: number) => Math.round(n * 1e4) / 1e4
  const pts12 = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180)
    return { x: p(cx + outerR * Math.cos(angle)), y: p(cy + outerR * Math.sin(angle)) }
  })
  const starPts = Array.from({ length: 24 }, (_, i) => {
    const idx = Math.floor(i / 2), isOuter = i % 2 === 0
    const angle = (idx * 30 + (isOuter ? 0 : 15) - 90) * (Math.PI / 180)
    const r = isOuter ? outerR : innerR * 0.55
    return `${p(cx + r * Math.cos(angle))},${p(cy + r * Math.sin(angle))}`
  }).join(' ')
  return (
    <svg width={700} height={700} viewBox="0 0 700 700" fill="none" aria-hidden="true">
      {pts12.map((pt, i) => (
        <line key={i} x1={cx} y1={cy} x2={pt.x} y2={pt.y} stroke="#DC6B52" strokeWidth="0.8" opacity="0.098" />
      ))}
      <polygon points={starPts} stroke="#DC6B52" strokeWidth="0.8" fill="none" opacity="0.098" />
      {[innerR * 0.55, innerR, midR, outerR * 0.75, outerR].map((r, ri) => {
        const pts = Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180)
          return `${p(cx + r * Math.cos(angle))},${p(cy + r * Math.sin(angle))}`
        }).join(' ')
        return <polygon key={ri} points={pts} stroke="#DC6B52" strokeWidth="0.8" fill="none" opacity="0.07" />
      })}
      {pts12.slice(0, 6).map((pt, i) => (
        <line key={i} x1={pt.x} y1={pt.y} x2={pts12[i + 6].x} y2={pts12[i + 6].y} stroke="#DC6B52" strokeWidth="0.8" opacity="0.056" />
      ))}
    </svg>
  )
}
