'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import HandsThread from './svgs/HandsThread'
import RangoliDivider from './svgs/RangoliDivider'
import { useIsMobile } from '../hooks/useIsMobile'

const expertise = [
  { label: 'Psychology', accent: '#DC6B52', bg: '#FAE8E4' },
  { label: 'Couples & Family Therapy', accent: '#C94980', bg: '#F5D0E3' },
  { label: 'Relationship Coaching', accent: '#E8960C', bg: '#F9E4B0' },
]

export default function Coaching() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isMobile = useIsMobile()

  return (
    <>
      <section
        id="coaching"
        ref={ref}
        style={{
          backgroundColor: '#FDF6F0',
          padding: isMobile ? '80px 20px 100px' : '120px 40px 140px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Faint background pattern */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(201,73,128,0.04) 0%, transparent 50%), radial-gradient(circle at 15% 80%, rgba(232,150,12,0.04) 0%, transparent 50%)',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Title block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '64px' }}
          >
            <div style={{
              fontFamily: 'var(--font-urbanist), sans-serif',
              fontWeight: 200, fontSize: '10px',
              textTransform: 'uppercase', letterSpacing: '0.3em',
              color: '#DC6B52', marginBottom: '20px',
            }}>
              Now Offering
            </div>
            <h2 style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic', fontWeight: 400,
              fontSize: isMobile ? 'clamp(38px, 9.5vw, 58px)' : 'clamp(48px, 5.5vw, 72px)',
              color: '#3D1F14', lineHeight: 1,
              marginBottom: '20px',
            }}>
              Relationship Coaching.
            </h2>
            <div style={{
              width: '48px', height: '1px',
              backgroundColor: '#DC6B52', opacity: 0.5,
              margin: '0 auto',
            }} />
          </motion.div>

          {/* Body — illustration alongside the words */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              gap: isMobile ? '32px' : '64px',
              backgroundColor: '#F2BDB1',
              borderBottom: '4px solid #DC6B52',
              padding: isMobile ? '36px 24px 40px' : '56px 60px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Illustration */}
            <div style={{
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 1,
            }}>
              <HandsThread width={isMobile ? 200 : 300} height={isMobile ? 218 : 327} />
            </div>

            {/* Words */}
            <div style={{ position: 'relative', zIndex: 1, minWidth: 0 }}>
              <p style={{
                fontFamily: 'var(--font-urbanist), sans-serif',
                fontWeight: 300,
                fontSize: isMobile ? '15px' : '17px',
                color: 'rgba(61,31,20,0.8)',
                lineHeight: 1.9,
                marginBottom: '28px',
              }}>
                At Rishtey, we are here to support you at every step of the journey.
                When doubts or second thoughts arise, our experienced counselors — with
                expertise in psychology, couples and family therapy, and relationship
                coaching — offer personalized guidance to help you gain clarity,
                understand your feelings, and move forward with confidence toward one of
                life&rsquo;s most important decisions.
              </p>

              {/* Areas of expertise */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '32px',
              }}>
                {expertise.map((e) => (
                  <span
                    key={e.label}
                    style={{
                      fontFamily: 'var(--font-urbanist), sans-serif',
                      fontWeight: 400,
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: e.accent,
                      backgroundColor: e.bg,
                      padding: '8px 14px',
                      borderRadius: '50px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {e.label}
                  </span>
                ))}
              </div>

              {/* Contact */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                paddingTop: '24px',
                borderTop: '1px solid rgba(61,31,20,0.12)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-urbanist), sans-serif',
                  fontWeight: 200,
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'rgba(61,31,20,0.55)',
                }}>
                  Contact us at
                </span>
                <a
                  href="mailto:rishteycontact@gmail.com"
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontStyle: 'italic',
                    fontSize: isMobile ? '19px' : '22px',
                    color: '#3D1F14',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(220,107,82,0.5)',
                    paddingBottom: '2px',
                    transition: 'color 0.3s ease, border-color 0.3s ease',
                    wordBreak: 'break-word',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#DC6B52'; e.currentTarget.style.borderColor = '#DC6B52' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#3D1F14'; e.currentTarget.style.borderColor = 'rgba(220,107,82,0.5)' }}
                >
                  rishteycontact@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <RangoliDivider bg="#3D1F14" />
    </>
  )
}
