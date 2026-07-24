import balloonsBg from '../imports/images.png'

export default function BalloonBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Real balloon photo */}
      <img
        src={balloonsBg}
        alt=""
        className="w-full h-full object-cover"
        style={{ opacity: 0.32 }}
      />
      {/* Dark overlay so text stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,58,92,0.4) 0%, rgba(0,94,140,0.5) 40%, rgba(0,58,92,0.7) 100%)',
        }}
      />
    </div>
  )
}
