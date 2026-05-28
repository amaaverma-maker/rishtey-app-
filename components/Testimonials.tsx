'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import RangoliDivider from './svgs/RangoliDivider'
import { useIsMobile } from '../hooks/useIsMobile'

const CARD_COLORS = ['#DC6B52', '#C94980', '#E8960C']

const testimonials = [
  {
    quote:
      'Rishtey didn\'t just find me a match — they understood what I was looking for before I could even articulate it myself. Our families couldn\'t be happier.',
    name: 'Priya & Arjun',
    location: 'Toronto',
    year: '2025',
  },
  {
    quote:
      'After years of failed apps and endless aunty setups, Rishtey felt different from the very first conversation. Meaningful, personal, and completely unhurried.',
    name: 'Zara & Kabir',
    location: 'London',
    year: '2025',
  },
  {
    quote:
      'The matchmaker took time to truly know us — our values, our quirks, our families. When we met, it was as if someone had read our hearts.',
    name: 'Simran & Rohit',
    location: 'Mumbai',
    year: '2026',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isMobile = useIsMobile()

  return (
    <>
      <section
        id="testimonials"
        ref={ref}
        style={{
          backgroundColor: '#FDF6F0',
          padding: isMobile ? '80px 20px 100px' : '140px 40px 160px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Faint background gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(ellipse at 10% 80%, rgba(220,107,82,0.06) 0%, transparent 55%),
                              radial-gradient(ellipse at 90% 10%, rgba(232,150,12,0.04) 0%, transparent 50%)`,
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '90px' }}
          >
            <div
              style={{
                fontFamily: 'var(--font-urbanist), sans-serif',
                fontWeight: 200,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                color: 'rgba(220,107,82,0.7)',
                marginBottom: '20px',
              }}
            >
              Stories
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: isMobile ? 'clamp(32px, 8vw, 52px)' : 'clamp(44px, 5vw, 68px)',
                color: '#3D1F14',
                lineHeight: 1.1,
              }}
            >
              Unions we have had the honour of weaving.
            </h2>
          </motion.div>

          {/* Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: isMobile ? '20px' : '32px',
            }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.13 }}
                style={{
                  backgroundColor: '#FDF6F0',
                  border: '1px solid rgba(220,107,82,0.18)',
                  borderTop: `3px solid ${CARD_COLORS[i % CARD_COLORS.length]}`,
                  padding: isMobile ? '32px 24px 28px' : '44px 36px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  position: 'relative',
                }}
              >
                {/* Open-quote mark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: isMobile ? '20px' : '32px',
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: isMobile ? '56px' : '72px',
                    lineHeight: 1,
                    color: `${CARD_COLORS[i % CARD_COLORS.length]}22`,
                    fontStyle: 'italic',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  &#8220;
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: isMobile ? '18px' : '20px',
                    lineHeight: 1.7,
                    color: 'rgba(61,31,20,0.85)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {t.quote}
                </p>

                <div
                  style={{
                    height: '1px',
                    backgroundColor: 'rgba(220,107,82,0.2)',
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-urbanist), sans-serif',
                        fontWeight: 500,
                        fontSize: '13px',
                        color: '#3D1F14',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-urbanist), sans-serif',
                        fontWeight: 300,
                        fontSize: '11px',
                        color: 'rgba(61,31,20,0.5)',
                        marginTop: '3px',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {t.location}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-urbanist), sans-serif',
                      fontWeight: 200,
                      fontSize: '11px',
                      color: 'rgba(220,107,82,0.6)',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {t.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RangoliDivider bg="#F0E4D8" />
    </>
  )
}
