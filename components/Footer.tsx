'use client'

import { useIsMobile } from '../hooks/useIsMobile'

const footerLinks = ['Privacy', 'Terms', 'Contact', 'Press', 'Careers']

export default function Footer() {
  const isMobile = useIsMobile()

  return (
    <footer
      style={{
        backgroundColor: '#6B3525',
        padding: isMobile ? '36px 20px 28px' : '48px 40px 36px',
        textAlign: 'center',
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: '28px',
          color: '#DC6B52',
          marginBottom: '24px',
          letterSpacing: '0.02em',
        }}
      >
        Rishtey
      </div>

      {/* Links */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isMobile ? '6px' : '8px',
          flexWrap: 'wrap',
          marginBottom: '28px',
        }}
      >
        {footerLinks.map((link, i) => (
          <span key={link} style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '6px' : '8px' }}>
            <a
              href="#"
              style={{
                fontFamily: 'var(--font-urbanist), sans-serif',
                fontWeight: 300,
                fontSize: isMobile ? '10px' : '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(253,246,240,0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: isMobile ? '6px 2px' : '0',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(253,246,240,0.8)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(253,246,240,0.5)')}
            >
              {link}
            </a>
            {i < footerLinks.length - 1 && (
              <span
                style={{
                  color: 'rgba(253,246,240,0.2)',
                  fontSize: '10px',
                  fontFamily: 'var(--font-urbanist), sans-serif',
                }}
              >
                ·
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Copyright */}
      <div
        style={{
          fontFamily: 'var(--font-urbanist), sans-serif',
          fontWeight: 200,
          fontSize: '10px',
          color: 'rgba(253,246,240,0.3)',
          letterSpacing: '0.1em',
          lineHeight: 1.6,
        }}
      >
        © 2024 Rishtey · All introductions made with care.
      </div>
    </footer>
  )
}
