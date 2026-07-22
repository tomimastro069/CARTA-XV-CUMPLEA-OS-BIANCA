interface Props {
  color?: string
  size?: number
}

export default function Crown({ color = '#c9a84c', size = 52 }: Props) {
  const h = size * 0.72

  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 52 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Corona"
      role="img"
    >
      {/* Base bar */}
      <rect x="4" y="28" width="44" height="5" rx="1" fill={color} opacity="0.9" />
      {/* Crown body */}
      <path
        d="M4 28 L4 14 L14 22 L26 4 L38 22 L48 14 L48 28 Z"
        fill={color}
        opacity="0.85"
      />
      {/* Gems */}
      <circle cx="26" cy="4" r="2.5" fill={color} />
      <circle cx="4" cy="14" r="2" fill={color} opacity="0.7" />
      <circle cx="48" cy="14" r="2" fill={color} opacity="0.7" />
    </svg>
  )
}
