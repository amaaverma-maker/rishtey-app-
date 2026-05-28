export default function RishteyMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Dark rounded square background */}
      <rect width="100" height="100" rx="22" fill="#2a1208" />
      {/* Shirorekha — top bar */}
      <rect x="18" y="22" width="64" height="7" rx="3.5" fill="#FDF6F0" />
      {/* Vertical stroke */}
      <rect x="18" y="22" width="8" height="58" rx="4" fill="#FDF6F0" />
      {/* Shoulder of R */}
      <path d="M26 29 C42 29 56 34 56 46 C56 58 42 62 26 62" fill="none" stroke="#FDF6F0" strokeWidth="8" strokeLinecap="round" />
      {/* Leg of R */}
      <path d="M40 57 L64 82" fill="none" stroke="#FDF6F0" strokeWidth="8" strokeLinecap="round" />
      {/* Bindi dot in gold */}
      <circle cx="72" cy="26" r="6" fill="#E8960C" />
    </svg>
  )
}
