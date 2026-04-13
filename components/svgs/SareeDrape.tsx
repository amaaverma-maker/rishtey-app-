export default function SareeDrape({ width = 160, height = 200 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Saree drape — abstract flowing pleats as parallel Bezier curves */}
      {/* Each curve suggests a pleat fold, flowing diagonally */}
      <path d="M 10 10 C 30 40 50 80 40 160 C 38 175 35 188 30 200" stroke="#DC6B52" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M 22 8 C 42 38 60 78 52 158 C 50 173 48 186 44 200" stroke="#DC6B52" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M 34 6 C 54 36 70 76 64 156 C 62 171 60 184 58 200" stroke="#DC6B52" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M 46 5 C 66 34 80 74 76 154 C 75 169 74 182 72 200" stroke="#DC6B52" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M 58 5 C 78 32 90 72 88 152 C 87 167 87 180 86 200" stroke="#DC6B52" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M 70 6 C 90 30 100 70 100 150 C 100 165 100 178 100 200" stroke="#DC6B52" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M 82 8 C 100 28 108 68 112 148 C 113 163 114 176 114 200" stroke="#DC6B52" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M 94 12 C 110 28 116 66 124 146 C 126 161 127 174 128 200" stroke="#DC6B52" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Pleating fold at top — horizontal gathering marks */}
      <path d="M 10 10 Q 60 2 94 12" stroke="#DC6B52" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M 14 18 Q 60 12 92 20" stroke="#DC6B52" strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.6" />
      {/* Bottom hem — subtle curve */}
      <path d="M 30 200 Q 79 194 128 200" stroke="#DC6B52" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.5" />
      {/* Border detail along right edge */}
      <path d="M 128 200 C 140 170 145 120 142 80 C 140 50 132 22 120 8" stroke="#DC6B52" strokeWidth="0.6" fill="none" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}
