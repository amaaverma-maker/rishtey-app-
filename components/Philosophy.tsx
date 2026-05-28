'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import MughalArch from './svgs/MughalArch'
import RangoliDivider from './svgs/RangoliDivider'
import { useIsMobile } from '../hooks/useIsMobile'

const pillars = [
  {
    title: 'Personally Vetted',
    body: 'Every applicant is interviewed. No exceptions.',
    color: '#DC6B52',
  },
  {
    title: 'Values Aligned',
    body: 'Culture, faith, and family come before credentials.',
    color: '#E8960C',
  },
  {
    title: 'Guided Always',
    body: 'We walk this path with you from first meeting to final yes.',
    color: '#C94980',
  },
]

export default function Philosophy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const isMobile = useIsMobile()

  return (
    <>
      <section
        id="philosophy"
        ref={ref}
        style={{
          backgroundColor: '#3D1F14',
          position: 'relative',
          overflow: 'hidden',
          clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)',
          paddingBottom: isMobile ? '100px' : '140px',
        }}
      >
        {/* Background Mughal arch */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            opacity: isMobile ? 0.6 : 1,
          }}
        >
          <MughalArch width={isMobile ? 280 : 500} height={isMobile ? 348 : 620} />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1100px',
            margin: '0 auto',
            padding: isMobile ? '80px 24px 0' : '160px 40px 0',
            textAlign: 'center',
          }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: 'var(--font-urbanist), sans-serif',
              fontWeight: 200,
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              color: '#DC6B52',
              marginBottom: isMobile ? '28px' : '40px',
            }}
          >
            The Rishtey Philosophy
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: isMobile ? 'clamp(28px, 7vw, 44px)' : 'clamp(40px, 5.5vw, 72px)',
              lineHeight: 1.15,
              color: '#FDF6F0',
              maxWidth: '760px',
              margin: '0 auto 48px',
              quotes: 'none',
            }}
          >
            "Every connection we make is preceded
            by a conversation, not a calculation."
          </motion.blockquote>

          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '32px' : '60px',
              flexWrap: 'wrap',
              marginTop: '48px',
            }}
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  flex: '0 1 200px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                {/* Top border mark */}
                <div
                  style={{
                    width: '40px',
                    height: '2px',
                    backgroundColor: pillar.color,
                    borderRadius: '1px',
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: isMobile ? '24px' : '28px',
                    color: '#FDF6F0',
                    textAlign: 'center',
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-urbanist), sans-serif',
                    fontWeight: 200,
                    fontSize: '13px',
                    color: 'rgba(253,246,240,0.6)',
                    lineHeight: 1.6,
                    textAlign: 'center',
                    maxWidth: '180px',
                  }}
                >
                  {pillar.body}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <RangoliDivider bg="#F9EFE7" />
    </>
  )
}
