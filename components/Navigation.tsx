'use client'

import { useEffect, useState } from 'react'
import RishteyMark from './svgs/RishteyMark'

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Process', href: '#process' },
  { label: 'For Whom', href: '#for-whom' },
  { label: 'Begin', href: '#begin' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(253,246,240,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease',
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Left — wordmark */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
        }}
      >
        <RishteyMark size={40} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          <span
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic',
              fontSize: '28px',
              fontWeight: 500,
              color: '#3D1F14',
              letterSpacing: '0.03em',
              lineHeight: 1,
            }}
          >
            Rishtey
          </span>
          <span
            style={{
              fontFamily: 'var(--font-urbanist), sans-serif',
              fontWeight: 200,
              fontSize: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.28em',
              color: 'rgba(220,107,82,0.75)',
              lineHeight: 1,
            }}
          >
            Matchmaking
          </span>
        </div>
      </a>

      {/* Center — nav links */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNav(e, link.href)}
            style={{
              fontFamily: 'var(--font-urbanist), sans-serif',
              fontWeight: 300,
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#3D1F14',
              textDecoration: 'none',
              opacity: 0.8,
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right — CTA */}
      <a
        href="/biodata"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: 'var(--font-urbanist), sans-serif',
          fontWeight: 300,
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: '#DC6B52',
          textDecoration: 'none',
          position: 'relative',
          paddingBottom: '2px',
        }}
        className="nav-apply"
      >
        Apply →
        <style>{`
          .nav-apply::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background: #DC6B52;
            transition: width 0.3s ease;
          }
          .nav-apply:hover::after {
            width: 100%;
          }
        `}</style>
      </a>
    </nav>
  )
}
