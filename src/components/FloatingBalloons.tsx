import { useEffect, useRef } from 'react'

interface Balloon {
  x: number
  y: number
  scale: number
  color: string
  shimmer: string
  duration: number
  delay: number
  sway: number
}

const BALLOON_COLORS: Array<{ fill: string; shimmer: string }> = [
  { fill: '#c9a84c', shimmer: '#f0d878' },   // gold
  { fill: '#d4af37', shimmer: '#f5e070' },   // gold 2
  { fill: '#b8b8c8', shimmer: '#e0e4ec' },   // silver
  { fill: '#c8ccd8', shimmer: '#eaecf4' },   // silver 2
  { fill: '#1a3a8a', shimmer: '#2a5ad4' },   // royal blue
  { fill: '#7c6fcd', shimmer: '#a99ee8' },   // lavender
]

function makeBalloons(count: number): Balloon[] {
  return Array.from({ length: count }, (_, i) => {
    const c = BALLOON_COLORS[i % BALLOON_COLORS.length]
    return {
      x: 4 + (i * 6.7) % 92,
      y: 10 + (i * 11.3) % 85,
      scale: 0.45 + (i * 0.17) % 0.75,
      color: c.fill,
      shimmer: c.shimmer,
      duration: 6 + (i * 1.3) % 8,
      delay: (i * 0.8) % 6,
      sway: 8 + (i * 3) % 18,
    }
  })
}

const balloons = makeBalloons(22)

export default function FloatingBalloons() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0px) rotate(0deg); }
          25%  { transform: translateY(-14px) rotate(2deg); }
          50%  { transform: translateY(-6px) rotate(-1.5deg); }
          75%  { transform: translateY(-18px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes swayL {
          0%, 100% { transform: translateX(0px) rotate(-2deg); }
          50%      { transform: translateX(-12px) rotate(2deg); }
        }
        @keyframes swayR {
          0%, 100% { transform: translateX(0px) rotate(2deg); }
          50%      { transform: translateX(12px) rotate(-2deg); }
        }
        @keyframes shimmerPulse {
          0%, 100% { opacity: 0.25; }
          50%      { opacity: 0.55; }
        }
      `}</style>

      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {balloons.map((b, i) => {
          const bw = 38 * b.scale
          const bh = 48 * b.scale
          const knotSize = 4 * b.scale
          const stringLen = 32 * b.scale
          const cx = bw / 2
          const cy = bh / 2

          return (
            <g
              key={i}
              transform={`translate(${b.x}%, ${b.y}%)`}
              style={{
                animation: `${i % 2 === 0 ? 'swayL' : 'swayR'} ${b.duration}s ease-in-out ${b.delay}s infinite, floatUp ${b.duration * 0.7}s ease-in-out ${b.delay * 0.5}s infinite`,
                opacity: 0.18 + b.scale * 0.25,
              }}
            >
              {/* Balloon body */}
              <ellipse
                cx={cx}
                cy={cy}
                rx={bw * 0.48}
                ry={bh * 0.5}
                fill={b.color}
              />
              {/* Shimmer highlight */}
              <ellipse
                cx={cx - bw * 0.12}
                cy={cy - bh * 0.15}
                rx={bw * 0.15}
                ry={bh * 0.18}
                fill={b.shimmer}
                style={{
                  animation: `shimmerPulse ${b.duration * 0.6}s ease-in-out ${b.delay}s infinite`,
                }}
              />
              {/* Knot */}
              <ellipse
                cx={cx}
                cy={bh + knotSize * 0.4}
                rx={knotSize * 0.6}
                ry={knotSize * 0.5}
                fill={b.color}
              />
              {/* String */}
              <path
                d={`M ${cx} ${bh + knotSize} Q ${cx + b.sway * 0.4} ${bh + stringLen * 0.5} ${cx - b.sway * 0.2} ${bh + stringLen}`}
                stroke={b.color}
                strokeWidth={1 * b.scale}
                fill="none"
                opacity={0.6}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
