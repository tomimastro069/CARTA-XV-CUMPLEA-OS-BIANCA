export default function MarbleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base deep navy */}
      <div className="absolute inset-0" style={{ background: '#003A5C' }} />

      {/* SVG marble swirl filter */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="marble" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.008"
              numOctaves="6"
              seed="3"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.00
                      0 0 0 0 0.37
                      0 0 0 0 0.55
                      0 0 0 18 -7"
              result="blue"
            />
            <feTurbulence
              type="turbulence"
              baseFrequency="0.025 0.015"
              numOctaves="3"
              seed="12"
              result="noise2"
            />
            <feColorMatrix
              in="noise2"
              type="matrix"
              values="0 0 0 0 0.25
                      0 0 0 0 0.81
                      0 0 0 0 1.00
                      0 0 0 12 -4"
              result="blue2"
            />
            <feBlend in="blue" in2="blue2" mode="screen" result="blended" />
            <feComposite in="blended" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#marble)" opacity="0.9" />
      </svg>

      {/* Subtle radial light bloom top-center */}
      <div
        className="absolute"
        style={{
          top: '-10%',
          left: '20%',
          width: '60%',
          height: '50%',
          background: 'radial-gradient(ellipse at center, rgba(64,207,255,0.35) 0%, transparent 70%)',
        }}
      />

      {/* Bottom darker fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(0,58,92,0.75))',
        }}
      />

      {/* Faint gold shimmer veins */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="vein">
            <feTurbulence type="fractalNoise" baseFrequency="0.05 0.02" numOctaves="4" seed="7" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.79
                      0 0 0 0 0.66
                      0 0 0 0 0.30
                      0 0 0 30 -12"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#vein)" />
      </svg>
    </div>
  )
}
