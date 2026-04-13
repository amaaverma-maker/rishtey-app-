export default function HandsThread({ width = 440, height = 480 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 440 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Two hands reaching toward each other, connected by a thread"
    >
      {/* Left hand — reaching from left, palm facing right */}
      {/* Wrist and sleeve suggestion */}
      <path
        d="M30 320 C40 310 50 305 60 308"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M28 328 C38 318 50 313 62 316"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      {/* Sleeve cuff line */}
      <path
        d="M30 320 Q26 324 28 328"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      {/* Palm */}
      <path
        d="M60 308 C75 306 85 308 90 312 C95 316 96 322 93 328 C90 334 82 336 72 335 C62 334 55 328 55 322 C55 318 57 316 60 314"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      {/* Left index finger pointing right */}
      <path
        d="M90 312 C105 306 125 300 148 298"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M93 318 C108 313 126 308 148 307"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M148 298 Q152 302 148 307"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      {/* Left middle finger, slightly curved */}
      <path
        d="M88 322 C103 318 120 316 140 318"
        stroke="#3D1F14" strokeWidth="1" strokeLinecap="round" fill="none"
      />
      {/* Left ring finger hint */}
      <path
        d="M85 328 C96 326 108 326 120 328"
        stroke="#3D1F14" strokeWidth="0.8" strokeLinecap="round" fill="none"
      />

      {/* Right hand — reaching from right, palm facing left */}
      {/* Wrist and sleeve suggestion */}
      <path
        d="M410 160 C400 150 390 145 380 148"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M412 168 C402 158 392 153 380 156"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      {/* Sleeve cuff line */}
      <path
        d="M410 160 Q414 164 412 168"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      {/* Palm */}
      <path
        d="M380 148 C365 146 355 148 350 152 C345 156 344 162 347 168 C350 174 358 176 368 175 C378 174 385 168 385 162 C385 158 383 156 380 154"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      {/* Right index finger pointing left */}
      <path
        d="M350 152 C335 146 315 140 292 138"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M347 158 C332 153 314 148 292 147"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M292 138 Q288 142 292 147"
        stroke="#3D1F14" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      {/* Right middle finger hint */}
      <path
        d="M352 162 C337 158 320 156 300 158"
        stroke="#3D1F14" strokeWidth="1" strokeLinecap="round" fill="none"
      />
      {/* Right ring finger hint */}
      <path
        d="M355 168 C344 166 332 166 320 168"
        stroke="#3D1F14" strokeWidth="0.8" strokeLinecap="round" fill="none"
      />

      {/* The thread — catenary curve from left fingertip to right fingertip */}
      {/* Left fingertip ~(148, 302), right fingertip ~(292, 142) */}
      <path
        d="M148 302 C180 340 220 370 260 370 C290 370 295 330 292 142"
        stroke="#DC6B52" strokeWidth="1" strokeLinecap="round" fill="none"
        strokeDasharray="none"
      />

      {/* Botanicals along the thread */}

      {/* Lotus at thread's lowest point (~220, 372) — saffron */}
      {/* Lotus petals */}
      <path d="M220 365 C215 355 210 350 218 345 C220 343 222 343 224 345 C232 350 227 355 222 365 Z"
        stroke="#E8960C" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M218 362 C210 355 206 348 212 342 C214 340 217 340 218 342 C220 346 219 354 218 362"
        stroke="#E8960C" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M222 362 C230 355 234 348 228 342 C226 340 223 340 222 342 C220 346 221 354 222 362"
        stroke="#E8960C" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Lotus center */}
      <circle cx="220" cy="362" r="2" stroke="#E8960C" strokeWidth="1" fill="none" />

      {/* Jasmine sprig near middle-left of thread (~185, 355) */}
      <path d="M185 355 C183 350 181 347 184 344" stroke="#DC6B52" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      <circle cx="184" cy="343" r="2.5" stroke="#DC6B52" strokeWidth="0.8" fill="none" />
      <path d="M183 342 C181 339 180 337 182 335" stroke="#DC6B52" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      <circle cx="182" cy="334" r="1.5" stroke="#DC6B52" strokeWidth="0.8" fill="none" />
      <path d="M186 344 C188 341 189 339 188 337" stroke="#DC6B52" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      <circle cx="188" cy="336" r="1.5" stroke="#DC6B52" strokeWidth="0.8" fill="none" />

      {/* Paisley 1 — near right portion of thread (~255, 360) */}
      <path
        d="M255 368 C250 362 248 354 252 348 C254 345 258 344 260 347 C263 351 261 360 255 368 Z"
        stroke="#DC6B52" strokeWidth="0.8" fill="none" strokeLinecap="round"
      />
      <path
        d="M256 366 C254 362 254 356 257 350"
        stroke="#DC6B52" strokeWidth="0.6" fill="none" strokeLinecap="round"
      />

      {/* Paisley 2 — upper left thread area (~170, 340) */}
      <path
        d="M170 348 C166 342 165 335 169 330 C171 328 174 328 175 330 C177 334 175 343 170 348 Z"
        stroke="#DC6B52" strokeWidth="0.8" fill="none" strokeLinecap="round"
      />

      {/* Paisley 3 — near right hand area (~275, 310) */}
      <path
        d="M275 320 C271 315 270 309 273 305 C274 303 277 303 278 305 C280 308 279 316 275 320 Z"
        stroke="#DC6B52" strokeWidth="0.8" fill="none" strokeLinecap="round"
      />

      {/* Small leaf near lotus */}
      <path d="M210 355 C207 348 209 342 213 340 C211 345 210 350 212 355"
        stroke="#DC6B52" strokeWidth="0.8" fill="none" strokeLinecap="round" />

      {/* Tiny floating dot accents */}
      <circle cx="200" cy="348" r="1" fill="#DC6B52" opacity="0.5" />
      <circle cx="242" cy="368" r="1" fill="#DC6B52" opacity="0.5" />
      <circle cx="265" cy="355" r="0.8" fill="#DC6B52" opacity="0.4" />
    </svg>
  )
}
