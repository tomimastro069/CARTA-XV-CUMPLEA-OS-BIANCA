import fullCardArt from '../imports/Invitación 15 años Floral Elegante Azul.png'

// Full-page decorative art (crown, flowers, butterflies, stars distributed
// top to bottom) sized to match the page's own scroll height, so it stretches
// exactly once across the whole page instead of being cropped or tiled.
export default function PageEdges() {
  return (
    <img
      src={fullCardArt}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ objectFit: 'cover', objectPosition: 'top center' }}
    />
  )
}
