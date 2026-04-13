import BiodataForm from '@/components/BiodataForm'
import RishteyMark from '@/components/svgs/RishteyMark'

export const metadata = {
  title: 'Share Your Biodata — Rishtey',
  description: 'Fill in your biodata and a dedicated Rishtey matchmaker will be in touch within 48 hours.',
}

export default function BiodataPage() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      {/* Vibrant gradient background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(135deg, #FAE8E4 0%, #FDF6F0 35%, #F5D0E3 65%, #F9E4B0 100%)',
        zIndex: 0,
      }} />

      {/* Decorative circles */}
      <div style={{
        position: 'fixed', top: '-120px', right: '-120px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,73,128,0.18) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'fixed', bottom: '-100px', left: '-80px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,150,12,0.15) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'fixed', top: '40%', left: '-60px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,107,82,0.1) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      {/* Header */}
      <header style={{
        position: 'relative', zIndex: 10,
        padding: '20px 40px',
        borderBottom: '1px solid rgba(220,107,82,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(253,246,240,0.7)',
        backdropFilter: 'blur(12px)',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <RishteyMark size={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            <span style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic', fontWeight: 500, fontSize: '24px',
              color: '#3D1F14', letterSpacing: '0.03em', lineHeight: 1,
            }}>
              Rishtey
            </span>
            <span style={{
              fontFamily: 'var(--font-urbanist), sans-serif',
              fontWeight: 200, fontSize: '8px',
              textTransform: 'uppercase', letterSpacing: '0.28em',
              color: 'rgba(220,107,82,0.75)', lineHeight: 1,
            }}>
              Matchmaking
            </span>
          </div>
        </a>

        {/* Colourful top-right badge */}
        <div style={{
          fontFamily: 'var(--font-urbanist), sans-serif',
          fontWeight: 200, fontSize: '10px',
          textTransform: 'uppercase', letterSpacing: '0.2em',
          color: '#C94980',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C94980', display: 'inline-block' }} />
          Confidential &amp; Personal
        </div>
      </header>

      {/* Colourful top strip */}
      <div style={{
        position: 'relative', zIndex: 10,
        height: '4px',
        background: 'linear-gradient(to right, #DC6B52, #E8960C, #C94980, #1A7B8A, #E8C14A)',
      }} />

      {/* Form content */}
      <div style={{ position: 'relative', zIndex: 5 }}>
        <BiodataForm />
      </div>
    </main>
  )
}
