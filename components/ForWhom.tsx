'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SareeDrape from './svgs/SareeDrape'
import LeavesTouch from './svgs/LeavesTouch'
import GlobeWanderer from './svgs/GlobeWanderer'
import RangoliDivider from './svgs/RangoliDivider'

const audiences = [
  {
    num: '01',
    label: 'For those rooted in who they are',
    title: 'The Intentional',
    body: 'You know your values and want a partner who shares them, not just complements them. You are unhurried, clear-eyed, and ready.',
    extra: 'Traditional values, modern life — we hold both with equal care.',
    accent: '#DC6B52',
    accentLight: '#FAE8E4',
    bg: '#F2BDB1',
    bgHover: '#E89585',
    illustration: <SareeDrape width={180} height={220} />,
  },
  {
    num: '02',
    label: 'For second marriages and new beginnings',
    title: 'The Returning',
    body: "You have been through a chapter. You carry wisdom, not baggage. You are ready for the next one with clarity and open hands.",
    extra: 'We approach your story with complete discretion and deep respect.',
    accent: '#C94980',
    accentLight: '#F5D0E3',
    bg: '#F0D8E8',
    bgHover: '#D9A0C0',
    illustration: <LeavesTouch width={180} height={220} />,
  },
  {
    num: '03',
    label: 'For the diaspora and NRI community',
    title: 'Bridging Worlds',
    body: "You are South Asian at heart, globally based by choice. You want both cultural depth and modern ease — and you deserve both.",
    extra: 'We work across time zones. Your roots travel with you.',
    accent: '#E8960C',
    accentLight: '#F9E4B0',
    bg: '#F9E4B0',
    bgHover: '#E8C060',
    illustration: <GlobeWanderer width={180} height={220} />,
  },
]

export default function ForWhom() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<number | null>(null)

  return (
    <>
      <section
        id="for-whom"
        ref={ref}
        style={{
          backgroundColor: '#FDF6F0',
          padding: '120px 40px 140px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Faint background pattern */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(201,73,128,0.04) 0%, transparent 50%), radial-gradient(circle at 15% 80%, rgba(232,150,12,0.04) 0%, transparent 50%)',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Title block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <div style={{
              fontFamily: 'var(--font-urbanist), sans-serif',
              fontWeight: 200, fontSize: '10px',
              textTransform: 'uppercase', letterSpacing: '0.3em',
              color: '#DC6B52', marginBottom: '20px',
            }}>
              For Whom
            </div>
            <h2 style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic', fontWeight: 400,
              fontSize: 'clamp(48px, 5.5vw, 72px)',
              color: '#3D1F14', lineHeight: 1,
              marginBottom: '20px',
            }}>
              Crafted for the ready.
            </h2>
            <div style={{
              width: '48px', height: '1px',
              backgroundColor: '#DC6B52', opacity: 0.5,
              margin: '0 auto',
            }} />
          </motion.div>

          {/* Cards */}
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
            {audiences.map((a, i) => {
              const isActive = active === i
              return (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.14 }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  style={{
                    flex: isActive ? '0 0 420px' : '0 0 300px',
                    minHeight: '520px',
                    backgroundColor: isActive ? a.bgHover : a.bg,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '44px 36px 36px',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'flex 0.5s cubic-bezier(0.4,0,0.2,1), background-color 0.4s ease',
                    borderBottom: `4px solid ${isActive ? a.accent : 'transparent'}`,
                  }}
                >
                  {/* Large background number */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-10px',
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '160px',
                    fontWeight: 600,
                    color: isActive ? 'rgba(61,31,20,0.07)' : 'rgba(61,31,20,0.05)',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                    transition: 'color 0.4s ease',
                  }}>
                    {a.num}
                  </div>

                  {/* Small number badge */}
                  <div style={{
                    fontFamily: 'var(--font-urbanist), sans-serif',
                    fontWeight: 200,
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    color: a.accent,
                    marginBottom: '28px',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {a.num}
                  </div>

                  {/* Illustration */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '32px',
                    position: 'relative',
                    zIndex: 1,
                    transform: isActive ? 'scale(1.08)' : 'scale(1)',
                    transition: 'transform 0.4s ease',
                  }}>
                    {a.illustration}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: isActive ? '38px' : '32px',
                    color: '#3D1F14',
                    marginBottom: '14px',
                    lineHeight: 1.1,
                    position: 'relative',
                    zIndex: 1,
                    transition: 'font-size 0.3s ease',
                  }}>
                    {a.title}
                  </h3>

                  {/* Body */}
                  <p style={{
                    fontFamily: 'var(--font-urbanist), sans-serif',
                    fontWeight: 300,
                    fontSize: '14px',
                    color: 'rgba(61,31,20,0.75)',
                    lineHeight: 1.7,
                    flex: 1,
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {a.body}
                  </p>

                  {/* Extra line — revealed on hover */}
                  <div style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontStyle: 'italic',
                    fontSize: '16px',
                    color: 'rgba(61,31,20,0.6)',
                    lineHeight: 1.5,
                    marginTop: '16px',
                    position: 'relative',
                    zIndex: 1,
                    maxHeight: isActive ? '60px' : '0',
                    overflow: 'hidden',
                    opacity: isActive ? 1 : 0,
                    transition: 'max-height 0.4s ease, opacity 0.35s ease',
                  }}>
                    {a.extra}
                  </div>

                  {/* Bottom label + arrow */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '28px',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-urbanist), sans-serif',
                      fontWeight: 200,
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.18em',
                      color: a.accent,
                      maxWidth: '160px',
                      lineHeight: 1.5,
                    }}>
                      {a.label}
                    </div>

                    {/* Arrow — shown on hover */}
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: a.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scale(1)' : 'scale(0.6)',
                      transition: 'opacity 0.3s ease, transform 0.3s ease',
                      flexShrink: 0,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="#FDF6F0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <RangoliDivider bg="#3D1F14" />
    </>
  )
}
