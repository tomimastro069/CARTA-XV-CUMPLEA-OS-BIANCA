const palette = [
  { color: '#40CFFF', name: 'Celeste', hex: '#40CFFF' },
  { color: '#c9a84c', name: 'Dorado', hex: '#c9a84c' },
  { color: '#c0c8d4', name: 'Plateado', hex: '#c0c8d4' },
  { color: '#f0eae0', name: 'Champán', hex: '#f0eae0' },
  { color: '#1a1a2e', name: 'Negro noche', hex: '#1a1a2e' },
]


export default function DressCode() {
  return (
    <section className="py-20 px-6" style={{ background: 'rgba(0,102,145,0.91)' }}>
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <p
          className="text-xs uppercase tracking-[0.3em] mb-3"
          style={{ color: '#c9a84c', fontFamily: "'Raleway', sans-serif" }}
        >
          Vestimenta
        </p>
        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(2rem, 6vw, 2.8rem)',
            color: '#e4c96a',
          }}
        >
          Formal de gala
        </h2>
        <div
          className="mx-auto mt-5 mb-10"
          style={{
            width: 80,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
          }}
        />

        {/* Dress code note */}
        <p
          className="mb-10 text-sm leading-relaxed"
          style={{ color: 'rgba(216,226,236,0.65)', fontFamily: "'Raleway', sans-serif", fontWeight: 300, maxWidth: 400, margin: '0 auto 2.5rem' }}
        >
          Te pedimos asistir en vestimenta formal. Para las damas, vestido largo o midi.
          Para los caballeros, traje o smoking.
        </p>

        {/* Color palette */}
        <p
          className="text-xs uppercase tracking-[0.25em] mb-6"
          style={{ color: 'rgba(201,168,76,0.7)', fontFamily: "'Raleway', sans-serif" }}
        >
          Paleta de colores sugerida
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          {palette.map(({ color, name }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <div
                className="rounded-full transition-transform duration-200 hover:scale-110"
                style={{
                  width: 48,
                  height: 48,
                  background: color,
                  border: '1px solid rgba(201,168,76,0.25)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                }}
              />
              <span
                className="text-xs"
                style={{ color: 'rgba(216,226,236,0.5)', fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Note — no blue */}
        <div
          className="mt-10 mx-auto rounded-sm px-6 py-4 text-sm"
          style={{
            maxWidth: 380,
            border: '1px solid rgba(201,168,76,0.15)',
            background: 'rgba(201,168,76,0.04)',
            color: 'rgba(216,226,236,0.5)',
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 300,
          }}
        >
          ✦ Por favor evitar el <strong style={{ color: 'rgba(216,226,236,0.8)' }}>blanco</strong>, reservado para la quinceañera
        </div>
      </div>
    </section>
  )
}
