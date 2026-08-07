const photos = [
  {
    url: 'https://res.cloudinary.com/dwkdclfwe/image/upload/v1784918981/images_v6rbc5.jpg',
    alt: 'Salón de eventos elegante con decoración floral y vigas de madera',
    label: 'El Salón',
    className: 'col-span-2 row-span-2',
  },
  {
    url: 'https://res.cloudinary.com/dwkdclfwe/image/upload/v1786072037/WhatsApp_Image_2026-08-06_at_23.40.28_encepu.jpg',
    alt: 'Bianca',
    label: 'La Festejada',
    className: 'col-span-1 row-span-1',
  },
  {
    url: 'https://res.cloudinary.com/dwkdclfwe/image/upload/v1784916507/QUINTA_FERMINA_SALON_FUERA_a88tae.jpg',
    alt: 'Globos y luces festivas para una celebración',
    label: 'Decoración',
    className: 'col-span-1 row-span-1',
  },
]

const extraPhotos = [
  {
    url: 'https://res.cloudinary.com/dwkdclfwe/image/upload/v1784916651/unnamed_aadug2.webp',
    alt: 'Gran salón de baile con candelabros y sillas elegantes',
    label: 'Salón de baile',
  },
  {
    url: 'https://res.cloudinary.com/dwkdclfwe/image/upload/v1786072525/WhatsApp_Image_2026-08-07_at_00.14.36_jgk3b4.jpg',
    alt: 'Quinceañera con ramo de flores en vestido azul',
    label: 'Momento especial',
    objectPosition: 'top' as const,
    aspectRatio: '3 / 4',
  },
  {
    url: 'https://res.cloudinary.com/dwkdclfwe/image/upload/v1786072036/WhatsApp_Image_2026-08-06_at_23.40.34_ubctjw.jpg',
    alt: 'Centro de mesa floral de lujo',
    label: 'Momentos especiales',
  },
]
export default function VenueGallery() {
  return (
    <section
      className="relative py-20 px-6"
      style={{ background: 'rgba(232, 225, 208, 0.25)', zIndex: 1 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-3"
            style={{
              color: '#5b8fd9',
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            El lugar
          </p>

          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(2rem, 6vw, 2.8rem)',
              background: 'linear-gradient(90deg, #8fc1f5 0%, #3f6fc0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Donde todo sucederá
          </h2>

          <div
            className="mx-auto mt-5"
            style={{
              width: 80,
              height: 1,
              background:
                'linear-gradient(90deg, transparent, #5b8fd9, transparent)',
            }}
          />
        </div>

        {/* FOTO PRINCIPAL */}
        <div
          className="relative overflow-hidden group mb-3
             h-[220px]
             sm:h-[260px]
             lg:h-[320px]
             xl:h-[360px]"
          style={{
            border: '1px solid rgba(107,166,235,0.18)',
            borderRadius: 2,
          }}
        >
          <img
            src={photos[0].url}
            alt={photos[0].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, transparent 45%, rgba(0,58,92,.45) 100%)',
            }}
          />

          <div
            className="absolute bottom-3 left-4 text-xs uppercase tracking-[0.2em]"
            style={{
              color: '#5b8fd9',
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            {photos[0].label}
          </div>
        </div>

        {/* DOS FOTOS CHICAS */}
        <div className="grid grid-cols-2 gap-3">
          {photos.slice(1).map((photo) => (
            <div
              key={photo.url}
              className="relative overflow-hidden group"
              style={{
                aspectRatio: '4 / 3',
                border: '1px solid rgba(107,166,235,0.18)',
                borderRadius: 2,
              }}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 45%, rgba(0,58,92,.45) 100%)',
                }}
              />

              <div
                className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.2em]"
                style={{
                  color: '#5b8fd9',
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                {photo.label}
              </div>
            </div>
          ))}
        </div>

        {/* FILA INFERIOR */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
          {extraPhotos.map((photo) => (
            <div
              key={photo.url}
              className="relative overflow-hidden group self-start"
              style={{
                aspectRatio: photo.aspectRatio ?? '4 / 3',
                border: '1px solid rgba(107,166,235,0.15)',
                borderRadius: 2,
              }}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: photo.objectPosition ?? 'center' }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 40%, rgba(0,58,92,.85) 100%)',
                }}
              />

              <div
                className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.2em]"
                style={{
                  color: '#5b8fd9',
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                {photo.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

