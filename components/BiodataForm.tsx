'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

type FormData = {
  fullName: string
  age: string
  gender: string
  religion: string
  caste: string
  motherTongue: string
  height: string
  education: string
  occupation: string
  city: string
  country: string
  maritalStatus: string
  aboutYou: string
  partnerExpectations: string
  contactEmail: string
  contactPhone: string
}

const initialData: FormData = {
  fullName: '', age: '', gender: '', religion: '', caste: '',
  motherTongue: '', height: '', education: '', occupation: '',
  city: '', country: '', maritalStatus: '', aboutYou: '',
  partnerExpectations: '', contactEmail: '', contactPhone: '',
}

const SECTION_COLORS = ['#DC6B52', '#C94980', '#E8960C', '#1A7B8A']

function inputBase(accent = '#DC6B52'): React.CSSProperties {
  return {
    width: '100%',
    backgroundColor: '#ffffff',
    border: `1.5px solid rgba(0,0,0,0.12)`,
    borderRadius: '8px',
    padding: '12px 16px',
    fontFamily: 'var(--font-urbanist), sans-serif',
    fontWeight: 400,
    fontSize: '15px',
    color: '#1a1a1a',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    appearance: 'none' as const,
    WebkitAppearance: 'none' as const,
    boxSizing: 'border-box' as const,
  }
}

function Field({ label, accent = '#DC6B52', children }: { label: string; accent?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{
        fontFamily: 'var(--font-urbanist), sans-serif',
        fontWeight: 600,
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        color: accent,
      }}>
        {label}
      </label>
      {children}
    </div>
  )
}

function SectionCard({ title, accent, isMobile, children }: { title: string; accent: string; isMobile: boolean; children: React.ReactNode }) {
  return (
    <div style={{
      backgroundColor: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(8px)',
      borderRadius: '16px',
      border: `1px solid rgba(0,0,0,0.08)`,
      borderTop: `4px solid ${accent}`,
      padding: isMobile ? '24px 20px' : '32px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    }}>
      <div style={{
        fontFamily: 'var(--font-cormorant), serif',
        fontStyle: 'italic',
        fontSize: '22px',
        fontWeight: 500,
        color: accent,
        marginBottom: '24px',
        paddingBottom: '12px',
        borderBottom: `1px solid ${accent}22`,
      }}>
        {title}
      </div>
      {children}
    </div>
  )
}

export default function BiodataForm() {
  const [form, setForm] = useState<FormData>(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const isMobile = useIsMobile()

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, accent = '#DC6B52') => {
    e.currentTarget.style.borderColor = accent
    e.currentTarget.style.boxShadow = `0 0 0 3px ${accent}22`
  }
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'
    e.currentTarget.style.boxShadow = 'none'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/biodata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setSubmitted(true)
      else setError('Something went wrong. Please try again or email us directly.')
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  const grid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: isMobile ? '16px' : '20px',
  }

  return (
    <section id="begin" style={{ padding: isMobile ? '40px 16px 80px' : '60px 40px 100px', position: 'relative' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: isMobile ? '32px' : '40px', textAlign: 'center' }}
        >
          <div style={{
            fontFamily: 'var(--font-urbanist), sans-serif',
            fontWeight: 200, fontSize: '10px',
            textTransform: 'uppercase', letterSpacing: '0.3em',
            color: '#DC6B52', marginBottom: '14px',
          }}>
            Begin Your Journey
          </div>
          <h2 style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic', fontWeight: 500,
            fontSize: isMobile ? 'clamp(28px, 8vw, 44px)' : 'clamp(36px, 4vw, 56px)',
            color: '#3D1F14', lineHeight: 1.1, marginBottom: '14px',
          }}>
            Share your biodata with us.
          </h2>
          <p style={{
            fontFamily: 'var(--font-urbanist), sans-serif',
            fontWeight: 300, fontSize: isMobile ? '14px' : '15px',
            lineHeight: 1.8, color: 'rgba(61,31,20,0.7)',
            maxWidth: '500px', margin: '0 auto',
          }}>
            Every great match begins with a conversation. Fill in the details below
            and a dedicated matchmaker will be in touch within 48 hours.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(12px)',
              borderRadius: '20px',
              border: '1px solid rgba(220,107,82,0.2)',
              borderTop: '4px solid #DC6B52',
              padding: isMobile ? '48px 24px' : '64px 48px',
              textAlign: 'center',
              boxShadow: '0 8px 40px rgba(220,107,82,0.12)',
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🪔</div>
            <div style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic',
              fontSize: isMobile ? '28px' : '36px',
              color: '#3D1F14', marginBottom: '16px',
            }}>
              We have received your biodata.
            </div>
            <p style={{
              fontFamily: 'var(--font-urbanist), sans-serif',
              fontWeight: 300, fontSize: '15px',
              lineHeight: 1.8, color: 'rgba(61,31,20,0.65)',
            }}>
              A matchmaker will reach out within 48 hours. Check your inbox for a confirmation email.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '24px' }}
          >
            {/* Personal Details */}
            <SectionCard title="Personal Details" accent={SECTION_COLORS[0]} isMobile={isMobile}>
              <div style={grid}>
                <Field label="Full Name *" accent={SECTION_COLORS[0]}>
                  <input required type="text" value={form.fullName} onChange={set('fullName')}
                    placeholder="As on official documents"
                    style={inputBase(SECTION_COLORS[0])}
                    onFocus={(e) => focus(e, SECTION_COLORS[0])} onBlur={blur} />
                </Field>
                <Field label="Age *" accent={SECTION_COLORS[0]}>
                  <input required type="number" min="18" max="80" value={form.age} onChange={set('age')}
                    placeholder="Years"
                    style={inputBase(SECTION_COLORS[0])}
                    onFocus={(e) => focus(e, SECTION_COLORS[0])} onBlur={blur} />
                </Field>
                <Field label="Gender *" accent={SECTION_COLORS[0]}>
                  <select required value={form.gender} onChange={set('gender')}
                    style={{ ...inputBase(SECTION_COLORS[0]), cursor: 'pointer', color: form.gender ? '#1a1a1a' : '#999' }}
                    onFocus={(e) => focus(e, SECTION_COLORS[0])} onBlur={blur}>
                    <option value="" disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>
                <Field label="Marital Status *" accent={SECTION_COLORS[0]}>
                  <select required value={form.maritalStatus} onChange={set('maritalStatus')}
                    style={{ ...inputBase(SECTION_COLORS[0]), cursor: 'pointer', color: form.maritalStatus ? '#1a1a1a' : '#999' }}
                    onFocus={(e) => focus(e, SECTION_COLORS[0])} onBlur={blur}>
                    <option value="" disabled>Select status</option>
                    <option value="Never Married">Never Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Separated">Separated</option>
                  </select>
                </Field>
                <Field label="Height" accent={SECTION_COLORS[0]}>
                  <input type="text" value={form.height} onChange={set('height')}
                    placeholder="e.g. 5′ 7″"
                    style={inputBase(SECTION_COLORS[0])}
                    onFocus={(e) => focus(e, SECTION_COLORS[0])} onBlur={blur} />
                </Field>
                <Field label="Mother Tongue" accent={SECTION_COLORS[0]}>
                  <input type="text" value={form.motherTongue} onChange={set('motherTongue')}
                    placeholder="e.g. Hindi, Punjabi, Tamil…"
                    style={inputBase(SECTION_COLORS[0])}
                    onFocus={(e) => focus(e, SECTION_COLORS[0])} onBlur={blur} />
                </Field>
              </div>
            </SectionCard>

            {/* Background */}
            <SectionCard title="Background" accent={SECTION_COLORS[1]} isMobile={isMobile}>
              <div style={grid}>
                <Field label="Religion" accent={SECTION_COLORS[1]}>
                  <input type="text" value={form.religion} onChange={set('religion')}
                    placeholder="e.g. Hindu, Muslim, Sikh…"
                    style={inputBase(SECTION_COLORS[1])}
                    onFocus={(e) => focus(e, SECTION_COLORS[1])} onBlur={blur} />
                </Field>
                <Field label="Caste / Community" accent={SECTION_COLORS[1]}>
                  <input type="text" value={form.caste} onChange={set('caste')}
                    placeholder="Optional"
                    style={inputBase(SECTION_COLORS[1])}
                    onFocus={(e) => focus(e, SECTION_COLORS[1])} onBlur={blur} />
                </Field>
                <Field label="Education *" accent={SECTION_COLORS[1]}>
                  <input required type="text" value={form.education} onChange={set('education')}
                    placeholder="Highest qualification"
                    style={inputBase(SECTION_COLORS[1])}
                    onFocus={(e) => focus(e, SECTION_COLORS[1])} onBlur={blur} />
                </Field>
                <Field label="Occupation *" accent={SECTION_COLORS[1]}>
                  <input required type="text" value={form.occupation} onChange={set('occupation')}
                    placeholder="Your current role"
                    style={inputBase(SECTION_COLORS[1])}
                    onFocus={(e) => focus(e, SECTION_COLORS[1])} onBlur={blur} />
                </Field>
                <Field label="City *" accent={SECTION_COLORS[1]}>
                  <input required type="text" value={form.city} onChange={set('city')}
                    placeholder="Where you currently live"
                    style={inputBase(SECTION_COLORS[1])}
                    onFocus={(e) => focus(e, SECTION_COLORS[1])} onBlur={blur} />
                </Field>
                <Field label="Country *" accent={SECTION_COLORS[1]}>
                  <input required type="text" value={form.country} onChange={set('country')}
                    placeholder="Country of residence"
                    style={inputBase(SECTION_COLORS[1])}
                    onFocus={(e) => focus(e, SECTION_COLORS[1])} onBlur={blur} />
                </Field>
              </div>
            </SectionCard>

            {/* About You */}
            <SectionCard title="About You" accent={SECTION_COLORS[2]} isMobile={isMobile}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '20px' }}>
                <Field label="Interests / A few words about yourself *" accent={SECTION_COLORS[2]}>
                  <textarea required value={form.aboutYou} onChange={set('aboutYou')} rows={4}
                    placeholder="Your interests, personality, values, family background…"
                    style={{ ...inputBase(SECTION_COLORS[2]), resize: 'vertical', minHeight: '110px', lineHeight: 1.7 }}
                    onFocus={(e) => focus(e, SECTION_COLORS[2])} onBlur={blur} />
                </Field>
                <Field label="What you are looking for in a partner" accent={SECTION_COLORS[2]}>
                  <textarea value={form.partnerExpectations} onChange={set('partnerExpectations')} rows={4}
                    placeholder="Values, lifestyle, qualities that matter most to you…"
                    style={{ ...inputBase(SECTION_COLORS[2]), resize: 'vertical', minHeight: '110px', lineHeight: 1.7 }}
                    onFocus={(e) => focus(e, SECTION_COLORS[2])} onBlur={blur} />
                </Field>
              </div>
            </SectionCard>

            {/* Contact */}
            <SectionCard title="Contact" accent={SECTION_COLORS[3]} isMobile={isMobile}>
              <div style={grid}>
                <Field label="Email Address *" accent={SECTION_COLORS[3]}>
                  <input required type="email" value={form.contactEmail} onChange={set('contactEmail')}
                    placeholder="your@email.com"
                    style={inputBase(SECTION_COLORS[3])}
                    onFocus={(e) => focus(e, SECTION_COLORS[3])} onBlur={blur} />
                </Field>
                <Field label="Phone (optional)" accent={SECTION_COLORS[3]}>
                  <input type="tel" value={form.contactPhone} onChange={set('contactPhone')}
                    placeholder="+91 98765 43210"
                    style={inputBase(SECTION_COLORS[3])}
                    onFocus={(e) => focus(e, SECTION_COLORS[3])} onBlur={blur} />
                </Field>
              </div>
            </SectionCard>

            {/* Submit */}
            <div style={{ textAlign: 'center', paddingTop: '8px' }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? '#B85240' : 'linear-gradient(135deg, #DC6B52, #C94980)',
                  color: '#fff',
                  fontFamily: 'var(--font-urbanist), sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  padding: isMobile ? '16px 48px' : '16px 64px',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: loading ? 'default' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  boxShadow: '0 4px 20px rgba(220,107,82,0.35)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  width: isMobile ? '100%' : 'auto',
                }}
                onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(220,107,82,0.45)' } }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(220,107,82,0.35)' }}
              >
                {loading ? 'Sending…' : 'Submit Biodata'}
              </button>

              {error && (
                <p style={{
                  marginTop: '14px',
                  fontFamily: 'var(--font-urbanist), sans-serif',
                  fontWeight: 400, fontSize: '13px', color: '#C94980',
                }}>
                  {error}
                </p>
              )}

              <p style={{
                marginTop: '16px',
                fontFamily: 'var(--font-urbanist), sans-serif',
                fontWeight: 300, fontSize: '12px',
                color: 'rgba(61,31,20,0.5)', letterSpacing: '0.04em',
              }}>
                Your information is kept strictly confidential and shared only with your consent.
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
