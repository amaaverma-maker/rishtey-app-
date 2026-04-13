export default function RishteyMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer circle frame */}
      <circle cx="24" cy="24" r="22" stroke="#DC6B52" strokeWidth="0.8" opacity="0.35" />
      <circle cx="24" cy="24" r="19" stroke="#DC6B52" strokeWidth="0.5" opacity="0.2" />

      {/* Mughal arch inside the circle */}
      <path
        d="M 13 38 L 13 24 C 13 15 17.5 10.5 21 8.8 C 22.2 8.2 23.1 8 24 8 C 24.9 8 25.8 8.2 27 8.8 C 30.5 10.5 35 15 35 24 L 35 38"
        stroke="#DC6B52" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.9"
      />

      {/* Inner arch line */}
      <path
        d="M 16 38 L 16 25 C 16 18 19.5 13.5 22.5 11.5 C 23.1 11.1 23.6 11 24 11 C 24.4 11 24.9 11.1 25.5 11.5 C 28.5 13.5 32 18 32 25 L 32 38"
        stroke="#DC6B52" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.45"
      />

      {/* Keystone gem at arch crown */}
      <path d="M 24 8 L 26 5.5 L 24 3 L 22 5.5 Z" stroke="#DC6B52" strokeWidth="0.9" fill="none" opacity="0.7" />

      {/* Crown rays */}
      {[[-30, 0.4], [-15, 0.3], [0, 0.5], [15, 0.3], [30, 0.4]].map(([deg, op], i) => {
        const angle = ((deg as number) - 90) * (Math.PI / 180)
        const cx = 24, cy = 8
        const r1 = 3.5, r2 = 7
        return (
          <line
            key={i}
            x1={cx + r1 * Math.cos(angle)}
            y1={cy + r1 * Math.sin(angle)}
            x2={cx + r2 * Math.cos(angle)}
            y2={cy + r2 * Math.sin(angle)}
            stroke="#DC6B52" strokeWidth="0.7" opacity={op as number}
          />
        )
      })}

      {/* Base plinth */}
      <line x1="11" y1="38" x2="37" y2="38" stroke="#DC6B52" strokeWidth="0.9" opacity="0.55" />
      <line x1="13" y1="40" x2="35" y2="40" stroke="#DC6B52" strokeWidth="0.6" opacity="0.3" />

      {/* Corner finials on plinth */}
      <path d="M 11 38 L 11 35 L 14 35" stroke="#DC6B52" strokeWidth="0.7" fill="none" opacity="0.45" />
      <path d="M 37 38 L 37 35 L 34 35" stroke="#DC6B52" strokeWidth="0.7" fill="none" opacity="0.45" />

      {/* Centre lotus bud at base of arch */}
      <path
        d="M 24 36 C 22 33 20.5 31 22.5 29 C 23 28.5 23.5 28.5 24 29 C 24.5 28.5 25 28.5 25.5 29 C 27.5 31 26 33 24 36 Z"
        stroke="#E8960C" strokeWidth="0.8" fill="none" opacity="0.85"
      />
      <line x1="24" y1="36" x2="24" y2="38" stroke="#E8960C" strokeWidth="0.7" opacity="0.6" />

      {/* Side dots — flanking the arch */}
      <circle cx="13" cy="28" r="1" fill="#DC6B52" opacity="0.25" />
      <circle cx="35" cy="28" r="1" fill="#DC6B52" opacity="0.25" />
      <circle cx="13" cy="33" r="0.7" fill="#DC6B52" opacity="0.18" />
      <circle cx="35" cy="33" r="0.7" fill="#DC6B52" opacity="0.18" />
    </svg>
  )
}
