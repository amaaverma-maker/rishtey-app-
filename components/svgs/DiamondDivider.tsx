interface DiamondDividerProps {
  opacity?: number
  color?: string
  count?: number
}

export default function DiamondDivider({ opacity = 0.4, color = '#DC6B52', count = 15 }: DiamondDividerProps) {
  const unit = 28
  const totalWidth = count * unit

  return (
    <svg
      width="100%"
      height="16"
      viewBox={`0 0 ${totalWidth} 16`}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, i) => {
        const cx = i * unit + unit / 2
        const cy = 8
        // Alternate: diamond or dot
        if (i % 3 === 1) {
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="1"
              fill={color}
              opacity={opacity}
            />
          )
        }
        return (
          <polygon
            key={i}
            points={`${cx},${cy - 4} ${cx + 5},${cy} ${cx},${cy + 4} ${cx - 5},${cy}`}
            stroke={color}
            strokeWidth="1"
            fill="none"
            opacity={opacity}
          />
        )
      })}
    </svg>
  )
}
