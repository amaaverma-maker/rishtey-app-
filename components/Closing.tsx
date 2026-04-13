'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import YantraRays from './svgs/YantraRays'
import DiamondDivider from './svgs/DiamondDivider'

export default function Closing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="begin"
      ref={ref}
      style={{
        backgroundColor: '#DC6B52',
        padding: '180px 40px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background Yantra rays */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      >
        <YantraRays size={600} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(56px, 7vw, 96px)',
            lineHeight: 0.88,
            color: '#FDF6F0',
            maxWidth: '700px',
            margin: '0 auto 40px',
          }}
        >
          Your rishta
          <br />
          is waiting.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-urbanist), sans-serif',
            fontWeight: 300,
            fontSize: '17px',
            color: 'rgba(253,246,240,0.8)',
            lineHeight: 1.7,
            marginBottom: '48px',
            maxWidth: '480px',
            margin: '0 auto 48px',
          }}
        >
          Applications are reviewed personally.
          We respond within 48 hours.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <a
            href="/biodata"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#FDF6F0',
              color: '#3D1F14',
              border: 'none',
              padding: '16px 48px',
              fontFamily: 'var(--font-urbanist), sans-serif',
              fontWeight: 300,
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'background-color 0.25s ease, color 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#DC6B52'
              e.currentTarget.style.color = '#FDF6F0'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FDF6F0'
              e.currentTarget.style.color = '#3D1F14'
            }}
          >
            Apply for Membership →
          </a>

          {/* Diamond divider below button */}
          <div style={{ marginTop: '40px', opacity: 0.3 }}>
            <DiamondDivider opacity={1} color="#FDF6F0" count={11} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
