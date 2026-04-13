'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import MalaThread from './svgs/MalaThread'
import DiamondDivider from './svgs/DiamondDivider'

const steps = [
  {
    number: '01',
    title: 'Apply',
    body: 'A short application tells us who you are and what you\'re seeking.',
  },
  {
    number: '02',
    title: 'Meet',
    body: 'A private conversation with your matchmaker, in person or by video.',
  },
  {
    number: '03',
    title: 'Know',
    body: 'We build your real picture — values, emotional readiness, family context.',
  },
  {
    number: '04',
    title: 'Connect',
    body: 'We introduce you to one to three carefully chosen people.',
  },
  {
    number: '05',
    title: 'Walk',
    body: 'We stay present through every step of what follows.',
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div
      ref={ref}
      style={{
        minHeight: '280px',
        padding: '48px 48px 48px 56px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Animated left border */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '2px',
          height: inView ? '100%' : '0%',
          backgroundColor: '#DC6B52',
          transition: 'height 0.8s ease',
          transitionDelay: `${index * 0.1}s`,
        }}
      />

      {/* Decorative step number */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '40px',
          fontFamily: 'var(--font-cormorant), serif',
          fontStyle: 'italic',
          fontSize: '80px',
          fontWeight: 400,
          color: 'rgba(220,107,82,0.2)',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        {step.number}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 + index * 0.08 }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '40px',
            color: '#3D1F14',
            marginBottom: '16px',
          }}
        >
          {step.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-urbanist), sans-serif',
            fontWeight: 300,
            fontSize: '15px',
            color: 'rgba(61,31,20,0.7)',
            lineHeight: 1.7,
            maxWidth: '360px',
          }}
        >
          {step.body}
        </p>
      </motion.div>
    </div>
  )
}

export default function Process() {
  const [activeStep, setActiveStep] = useState(-1)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observers = stepRefs.current.map((ref, i) => {
      if (!ref) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i)
        },
        { threshold: 0.5 }
      )
      obs.observe(ref)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <>
      <section
        id="process"
        ref={sectionRef}
        style={{
          backgroundColor: '#F9EFE7',
          minHeight: '100vh',
          display: 'flex',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            padding: '80px 40px',
            gap: '40px',
          }}
        >
          {/* Left sticky panel — 40% */}
          <div
            style={{
              width: '40%',
              position: 'sticky',
              top: '120px',
              alignSelf: 'flex-start',
              paddingTop: '40px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-urbanist), sans-serif',
                fontWeight: 200,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                color: '#DC6B52',
                marginBottom: '24px',
              }}
            >
              How It Works
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(48px, 5vw, 68px)',
                lineHeight: 0.9,
                color: '#3D1F14',
                marginBottom: '20px',
              }}
            >
              Five steps.
              <br />
              One thread.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-urbanist), sans-serif',
                fontWeight: 300,
                fontSize: '15px',
                color: 'rgba(61,31,20,0.6)',
                lineHeight: 1.7,
                marginBottom: '48px',
              }}
            >
              No algorithms. No browsing.
              <br />
              Just a guided, human process.
            </p>

            {/* Mala thread SVG */}
            <MalaThread activeIndex={activeStep} height={320} />
          </div>

          {/* Right scrollable steps — 60% */}
          <div style={{ width: '60%' }}>
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { stepRefs.current[i] = el }}
              >
                <StepCard step={step} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: '#F0E4D8', padding: '12px 0' }}>
        <DiamondDivider opacity={0.35} color="#DC6B52" count={25} />
      </div>
    </>
  )
}
