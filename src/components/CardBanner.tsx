import type { ReactNode } from 'react'
import cardArt from '../imports/images.png'

interface Props {
  variant: 'top' | 'bottom'
  children: ReactNode
}

// Wraps a section with the blank invitation card art as its real background —
// the crown/flowers/butterflies up top, the flower bed at the bottom — so the
// content sits directly on the card, with enough room reserved so the
// artwork never gets cut mid-motif or crowded by the text on top of it.
export default function CardBanner({ variant, children }: Props) {
  const isTop = variant === 'top'

  return (
    <div
      className="relative w-full flex"
      style={{
        background: '#f9f7f2',
        minHeight: 'clamp(460px, 60vw, 720px)',
        alignItems: isTop ? 'flex-end' : 'flex-start',
      }}
    >
      <img
        src={cardArt}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', objectPosition: variant }}
      />
      <div
        className="relative w-full"
        style={{ zIndex: 1, paddingTop: isTop ? 0 : '4vw', paddingBottom: isTop ? '4vw' : 0 }}
      >
        {children}
      </div>
    </div>
  )
}
