'use client'

import { useEffect, useState } from 'react'
import RishteyMark from './svgs/RishteyMark'
import { useIsMobile } from '../hooks/useIsMobile'

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Process', href: '#process' },
  { label: 'For Whom', href: '#for-whom' },
  { label: 'Begin', href: '#begin' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll and handle Escape key when menu is open
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close menu when switching to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .nav-desktop-links, .nav-desktop-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 768px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled || menuOpen ? 'rgba(253,246,240,0.97)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease',
          padding: isMobile ? '14px 20px' : '20px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', position: 'relative', zIndex: 1001 }}
        >
          <RishteyMark size={isMobile ? 32 : 40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            <span style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontSize: isMobile ? '22px' : '28px', fontWeight: 500, color: '#3D1F14', letterSpacing: '0.03em', lineHeight: 1 }}>
              Rishtey
            </span>
            <span style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 200, fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.28em', color: 'rgba(220,107,82,0.75)', lineHeight: 1 }}>
              Matchmaking
            </span>
          </div>
        </a>

        {/* Desktop nav links — hidden on mobile via CSS */}
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 300, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#3D1F14', textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA — hidden on mobile via CSS */}
        <a
          className="nav-desktop-cta nav-apply"
          href="/biodata"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 300, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#DC6B52', textDecoration: 'none', position: 'relative', paddingBottom: '2px' }}
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
            .nav-apply:hover::after { width: 100%; }
          `}</style>
        </a>

        {/* Mobile hamburger — hidden on desktop via CSS */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', justifyContent: 'center', position: 'relative', zIndex: 1001 }}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span style={{ display: 'block', width: '24px', height: '1.5px', backgroundColor: '#3D1F14', transition: 'transform 0.35s ease', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none', transformOrigin: 'center' }} />
          <span style={{ display: 'block', width: '16px', height: '1.5px', backgroundColor: '#3D1F14', transition: 'opacity 0.2s ease', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '1.5px', backgroundColor: '#3D1F14', transition: 'transform 0.35s ease', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none', transformOrigin: 'center' }} />
        </button>
      </nav>

      {/* Mobile fullscreen menu overlay */}
      <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(253,246,240,0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '36px',
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? 'all' : 'none',
            transition: 'opacity 0.35s ease',
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontStyle: 'italic',
                fontSize: '42px',
                fontWeight: 400,
                color: '#3D1F14',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(14px)',
                transition: `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s`,
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{
            width: '40px',
            height: '1px',
            backgroundColor: 'rgba(220,107,82,0.35)',
            opacity: menuOpen ? 1 : 0,
            transition: `opacity 0.4s ease ${navLinks.length * 0.06 + 0.04}s`,
          }} />

          <a
            href="/biodata"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-urbanist), sans-serif',
              fontWeight: 300,
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#FDF6F0',
              backgroundColor: '#DC6B52',
              padding: '15px 44px',
              textDecoration: 'none',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(14px)',
              transition: `opacity 0.4s ease ${navLinks.length * 0.06 + 0.08}s, transform 0.4s ease ${navLinks.length * 0.06 + 0.08}s`,
            }}
          >
            Apply →
          </a>
        </div>
    </>
  )
}
