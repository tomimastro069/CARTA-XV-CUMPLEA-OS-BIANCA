const photos = [
  {
    url: 'https://images.unsplash.com/photo-1780337092608-aad7948d7a60?w=800&h=520&fit=crop&auto=format',
    alt: 'Salón de eventos elegante con decoración floral y vigas de madera',
    label: 'El Salón',
    className: 'col-span-2 row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1775871299393-2cce027efaa9?w=400&h=260&fit=crop&auto=format',
    alt: 'Quinceañera con vestido azul y tiara',
    label: 'La Festejada',
    className: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1748551204321-845c277c1dba?w=400&h=260&fit=crop&auto=format',
    alt: 'Globos y luces festivas para una celebración',
    label: 'Decoración',
    className: 'col-span-1 row-span-1',
  },
]

const extraPhotos = [
  {
    url: 'https://images.unsplash.com/photo-1759519238029-689e99c6d19e?w=540&h=360&fit=crop&auto=format',
    alt: 'Gran salón de baile con candelabros y sillas elegantes',
    label: 'Salón de baile',
  },
  {
    url: 'https://images.unsplash.com/photo-1775871299482-3d8ecbc264bc?w=540&h=360&fit=crop&auto=format',
    alt: 'Quinceañera con ramo de flores en vestido azul',
    label: 'Momento especial',
  },
  {
    url: 'https://images.unsplash.com/photo-1530488228536-37ae1dbb20a4?w=540&h=360&fit=crop&auto=format',
    alt: 'Centro de mesa floral de lujo',
    label: 'Centros de mesa',
  },
]

export default function VenueGallery() {
  return (
    <section className="relative py-20 px-6" style={{ background: 'rgba(0, 58, 92, 0.14)', zIndex: 1 }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#c9a84c', fontFamily: "'Raleway', sans-serif" }}>
            El lugar
          </p>
          <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(2rem, 6vw, 2.8rem)', color: '#e4c96a' }}>
            Donde todo sucederá
          </h2>
          <div className="mx-auto mt-5" style={{ width: 80, height: 1, background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3" style={{ height: 'clamp(300px, 52vw, 520px)' }}>
          {photos.map((photo) => (
            <div
              key={photo.url}
              className={`${photo.className} relative overflow-hidden group`}
              style={{ borderRadius: 2, border: '1px solid rgba(201,168,76,0.18)' }}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(0,58,92,0.4) 100%)' }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(201,168,76,0.07)' }} />
              <div className="absolute bottom-3 left-4">
                <span className="text-xs uppercase tracking-[0.2em]" style={{ color: '#c9a84c', fontFamily: "'Raleway', sans-serif" }}>
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
          {extraPhotos.map((photo) => (
            <div
              key={photo.url}
              className="relative overflow-hidden group"
              style={{ height: 200, borderRadius: 2, border: '1px solid rgba(201,168,76,0.15)' }}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,58,92,0.85) 100%)' }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(201,168,76,0.07)' }} />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs uppercase tracking-[0.2em]" style={{ color: '#c9a84c', fontFamily: "'Raleway', sans-serif" }}>
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
