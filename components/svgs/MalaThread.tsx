'use client'

interface MalaThreadProps {
  activeIndex: number
  height?: number
}

export default function MalaThread({ activeIndex, height = 500 }: MalaThreadProps) {
  const beadPositions = [0.1, 0.28, 0.46, 0.64, 0.82]

  return (
    <svg
      width="24"
      height={height}
      viewBox={`0 0 24 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Wavy vertical thread */}
      <path
        d={`M 12 10
           C 8 ${height * 0.12} 16 ${height * 0.2} 12 ${height * 0.28}
           C 8 ${height * 0.36} 16 ${height * 0.44} 12 ${height * 0.52}
           C 8 ${height * 0.6} 16 ${height * 0.68} 12 ${height * 0.76}
           C 8 ${height * 0.84} 16 ${height * 0.9} 12 ${height * 0.96}`}
        stroke="#DC6B52"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      {/* Bead-knots */}
      {beadPositions.map((pos, i) => {
        const y = pos * height + height * 0.04
        const isActive = i <= activeIndex
        return (
          <g key={i}>
            <circle
              cx="12"
              cy={y}
              r="4"
              fill={isActive ? '#DC6B52' : 'none'}
              stroke="#DC6B52"
              strokeWidth="1"
              style={{
                filter: isActive ? 'drop-shadow(0 0 4px rgba(220,107,82,0.6))' : 'none',
                transition: 'fill 0.4s ease, filter 0.4s ease',
              }}
            />
          </g>
        )
      })}
    </svg>
  )
}
