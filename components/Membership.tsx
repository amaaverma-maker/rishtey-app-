'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import RangoliDivider from './svgs/RangoliDivider'

const tiers = [
  {
    name: 'Rishtey Select',
    urdu: 'For professionals beginning their matchmaking journey',
    accentColor: '#DC6B52',
    features: [
      '2 curated introductions',
      'One-on-one matchmaker consultation',
      'Fully verified profile',
      'Member community access',
    ],
    cta: 'Begin a conversation',
  },
  {
    name: 'Rishtey Signature',
    urdu: 'A personalised, hands-on matchmaking experience',
    accentColor: '#E8960C',
    features: [
      '4 curated introductions',
      'Extended in-person profile session',
      'Priority matchmaker support',
      'Ongoing feedback sessions',
      'All Select benefits',
    ],
    cta: 'Begin a conversation',
    elevated: true,
  },
  {
    name: 'Rishtey Premium',
    urdu: 'White-glove, highly curated premium matchmaking',
    accentColor: '#C4882A',
    features: [
      'Unlimited introductions',
      'Dedicated in-person meetings throughout your journey',
      'Dedicated concierge',
      'Family liaison service',
      'Pre-marital guidance',
      'Communication coaching',
    ],
    cta: 'Begin a conversation',
  },
]

export default function Membership() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <section
        id="membership"
        ref={ref}
        style={{
          backgroundColor: '#3D1F14',
          padding: '140px 40px 160px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background faint pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(220,107,82,0.04) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(232,150,12,0.03) 0%, transparent 40%)`,
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
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
              Membership
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(48px, 5.5vw, 72px)',
                color: '#FDF6F0',
                lineHeight: 1,
                marginBottom: '24px',
              }}
            >
              Begin your journey.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-urbanist), sans-serif',
                fontWeight: 300,
                fontSize: '14px',
                color: 'rgba(253,246,240,0.75)',
                letterSpacing: '0.04em',
                lineHeight: 1.7,
                maxWidth: '420px',
                margin: '0 auto',
              }}
            >
              Package details are shared during your first complimentary conversation.
            </p>
          </motion.div>

          {/* Tier cards */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
                whileHover={!tier.elevated ? { scale: 1.02 } : {}}
                style={{
                  width: '360px',
                  minHeight: '480px',
                  backgroundColor: 'rgba(253,246,240,0.04)',
                  borderTop: `1px solid ${tier.accentColor}`,
                  padding: '40px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: tier.elevated ? 'translateY(-20px) scale(1.02)' : undefined,
                  boxShadow: tier.elevated
                    ? '0 0 60px rgba(232,150,12,0.12)'
                    : undefined,
                  transition: 'transform 0.3s ease',
                  cursor: 'default',
                }}
              >
                {/* Tier name */}
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: '26px',
                    color: tier.accentColor,
                    marginBottom: '4px',
                    lineHeight: 1.2,
                  }}
                >
                  {tier.name}
                </div>

                {/* Urdu subtitle */}
                <div
                  style={{
                    fontFamily: 'var(--font-urbanist), sans-serif',
                    fontWeight: 300,
                    fontSize: '12px',
                    textTransform: 'none',
                    letterSpacing: '0.02em',
                    color: `rgba(253,246,240,0.5)`,
                    marginBottom: '16px',
                    lineHeight: 1.5,
                  }}
                >
                  {tier.urdu}
                </div>

                {/* Rule */}
                <div
                  style={{
                    height: '1px',
                    backgroundColor: `${tier.accentColor}4D`,
                    marginBottom: '28px',
                  }}
                />

                {/* Features */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontFamily: 'var(--font-urbanist), sans-serif',
                        fontWeight: 300,
                        fontSize: '14px',
                        color: 'rgba(253,246,240,0.8)',
                        lineHeight: 1.5,
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'flex-start',
                      }}
                    >
                      <span style={{ color: tier.accentColor, marginTop: '1px' }}>·</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/biodata"
                  style={{
                    marginTop: '36px',
                    display: 'block',
                    width: '100%',
                    padding: '14px 20px',
                    backgroundColor: 'transparent',
                    border: `1px solid ${tier.accentColor}`,
                    color: tier.accentColor,
                    fontFamily: 'var(--font-urbanist), sans-serif',
                    fontWeight: 300,
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    cursor: 'pointer',
                    transition: 'background-color 0.25s ease, color 0.25s ease',
                    textDecoration: 'none',
                    textAlign: 'center',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = tier.accentColor
                    e.currentTarget.style.color = '#3D1F14'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = tier.accentColor
                  }}
                >
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RangoliDivider bg="#DC6B52" />
    </>
  )
}
