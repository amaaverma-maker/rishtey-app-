import RishteyMark from '@/components/svgs/RishteyMark'

export const metadata = {
  title: 'Brand Assets — Rishtey',
  robots: 'noindex',
}

const colors = [
  { name: 'Deep Brown', hex: '#3D1F14', use: 'Primary background, text' },
  { name: 'Terracotta', hex: '#DC6B52', use: 'Accent, CTAs, highlights' },
  { name: 'Warm Cream', hex: '#FDF6F0', use: 'Light background, text on dark' },
  { name: 'Gold', hex: '#E8960C', use: 'Bindi dot, premium accents' },
  { name: 'Rose', hex: '#C94980', use: 'Gradient accent' },
  { name: 'Ink Dark', hex: '#2a1208', use: 'Logo mark background' },
]

export default function BrandPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#FDF6F0', fontFamily: 'Georgia, serif' }}>

      {/* Header */}
      <div style={{ backgroundColor: '#3D1F14', padding: '48px 60px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <RishteyMark size={48} />
            <div>
              <div style={{ fontStyle: 'italic', fontSize: '28px', color: '#FDF6F0', lineHeight: 1 }}>Rishtey</div>
              <div style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', color: '#DC6B52', marginTop: '4px' }}>Matchmaking</div>
            </div>
          </div>
          <h1 style={{ fontStyle: 'italic', fontWeight: 400, fontSize: '42px', color: '#FDF6F0', margin: '0 0 8px', lineHeight: 1.1 }}>
            Brand Assets
          </h1>
          <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: 'rgba(253,246,240,0.55)', margin: 0, letterSpacing: '0.04em' }}>
            Download logos and colours for use across social media and communications.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px' }}>

        {/* Logo downloads */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontStyle: 'italic', fontWeight: 400, fontSize: '28px', color: '#3D1F14', marginBottom: '8px' }}>Logo files</h2>
          <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'rgba(61,31,20,0.5)', marginBottom: '32px', letterSpacing: '0.02em' }}>
            SVG files scale to any size without quality loss. Open in a browser, then right-click the image and save, or use a tool like Figma / Canva to convert to PNG.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>

            {/* Icon — light bg */}
            <div style={{ border: '1px solid rgba(61,31,20,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: '#FDF6F0', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(61,31,20,0.08)' }}>
                <RishteyMark size={120} />
              </div>
              <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 600, fontSize: '13px', color: '#3D1F14' }}>Icon — Light</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: 'rgba(61,31,20,0.45)', marginTop: '2px' }}>Profile pictures · App icons</div>
                </div>
                <a href="/rishtey-icon.svg" download style={downloadBtn}>SVG</a>
              </div>
            </div>

            {/* Icon — dark bg */}
            <div style={{ border: '1px solid rgba(61,31,20,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: '#3D1F14', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(61,31,20,0.08)' }}>
                <RishteyMark size={120} />
              </div>
              <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 600, fontSize: '13px', color: '#3D1F14' }}>Icon — Dark</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: 'rgba(61,31,20,0.45)', marginTop: '2px' }}>Dark backgrounds · Stories</div>
                </div>
                <a href="/rishtey-icon.svg" download style={downloadBtn}>SVG</a>
              </div>
            </div>

            {/* Horizontal — light */}
            <div style={{ border: '1px solid rgba(61,31,20,0.1)', borderRadius: '12px', overflow: 'hidden', gridColumn: '1 / -1' }}>
              <div style={{ backgroundColor: '#FDF6F0', padding: '40px 48px', display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid rgba(61,31,20,0.08)' }}>
                <RishteyMark size={72} />
                <div>
                  <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 500, fontSize: '52px', color: '#3D1F14', lineHeight: 1, letterSpacing: '0.02em' }}>Rishtey</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 300, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '5px', color: '#DC6B52', marginTop: '6px' }}>Matchmaking</div>
                </div>
              </div>
              <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 600, fontSize: '13px', color: '#3D1F14' }}>Horizontal Lockup — Light</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: 'rgba(61,31,20,0.45)', marginTop: '2px' }}>Email signatures · Covers · Posts</div>
                </div>
                <a href="/rishtey-logo-light.svg" download style={downloadBtn}>SVG</a>
              </div>
            </div>

            {/* Horizontal — dark */}
            <div style={{ border: '1px solid rgba(61,31,20,0.1)', borderRadius: '12px', overflow: 'hidden', gridColumn: '1 / -1' }}>
              <div style={{ backgroundColor: '#3D1F14', padding: '40px 48px', display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid rgba(61,31,20,0.08)' }}>
                <RishteyMark size={72} />
                <div>
                  <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 500, fontSize: '52px', color: '#FDF6F0', lineHeight: 1, letterSpacing: '0.02em' }}>Rishtey</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 300, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '5px', color: '#DC6B52', marginTop: '6px' }}>Matchmaking</div>
                </div>
              </div>
              <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 600, fontSize: '13px', color: '#3D1F14' }}>Horizontal Lockup — Dark</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: 'rgba(61,31,20,0.45)', marginTop: '2px' }}>Dark backgrounds · LinkedIn banner</div>
                </div>
                <a href="/rishtey-logo-dark.svg" download style={downloadBtn}>SVG</a>
              </div>
            </div>

          </div>
        </section>

        {/* Colours */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontStyle: 'italic', fontWeight: 400, fontSize: '28px', color: '#3D1F14', marginBottom: '8px' }}>Brand colours</h2>
          <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'rgba(61,31,20,0.5)', marginBottom: '32px' }}>
            Use these exact hex values to stay consistent across all platforms.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {colors.map((c) => (
              <div key={c.hex} style={{ border: '1px solid rgba(61,31,20,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ backgroundColor: c.hex, height: '80px' }} />
                <div style={{ padding: '12px 16px' }}>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 600, fontSize: '13px', color: '#3D1F14' }}>{c.name}</div>
                  <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#DC6B52', marginTop: '3px' }}>{c.hex}</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: 'rgba(61,31,20,0.45)', marginTop: '4px' }}>{c.use}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 style={{ fontStyle: 'italic', fontWeight: 400, fontSize: '28px', color: '#3D1F14', marginBottom: '8px' }}>Typography</h2>
          <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'rgba(61,31,20,0.5)', marginBottom: '32px' }}>
            Both fonts are free on Google Fonts.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ border: '1px solid rgba(61,31,20,0.1)', borderRadius: '10px', padding: '28px 24px' }}>
              <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '36px', color: '#3D1F14', marginBottom: '12px', lineHeight: 1 }}>Cormorant Garamond</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: 'rgba(61,31,20,0.5)', letterSpacing: '0.05em', marginBottom: '8px', textTransform: 'uppercase' }}>Display serif</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: 'rgba(61,31,20,0.6)' }}>Used for headings, logo wordmark, pull quotes — always italic.</div>
            </div>
            <div style={{ border: '1px solid rgba(61,31,20,0.1)', borderRadius: '10px', padding: '28px 24px' }}>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 300, fontSize: '30px', color: '#3D1F14', marginBottom: '12px', lineHeight: 1, letterSpacing: '0.02em' }}>Urbanist</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: 'rgba(61,31,20,0.5)', letterSpacing: '0.05em', marginBottom: '8px', textTransform: 'uppercase' }}>UI sans-serif</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: 'rgba(61,31,20,0.6)' }}>Used for body text, captions, labels, navigation — weight 300.</div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

const downloadBtn: React.CSSProperties = {
  display: 'inline-block',
  padding: '7px 16px',
  border: '1px solid #DC6B52',
  color: '#DC6B52',
  fontFamily: 'Arial, sans-serif',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textDecoration: 'none',
  borderRadius: '4px',
  flexShrink: 0,
}
