const palette = [
  { color: '#1a1a2e', name: 'Negro', hex: '#1a1a2e' },
  { color: '#c9a84c', name: 'Dorado', hex: '#c9a84c' },
  { color: '#c0c8d4', name: 'Plateado', hex: '#c0c8d4' },
  { color: '#f0eae0', name: 'Champán', hex: '#f0eae0' },
  { color: '#1a2d74ff', name: 'Azul', hex: '#40CFFF' },
]


export default function DressCode() {
  return (
    <section className="py-20 px-6" style={{ background: 'linear-gradient(rgba(0, 140, 200, 0.6) 0%, rgba(220, 245, 255, 0.6) 100%)' }}>
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
          className="text-xs uppercase tracking-[0.40em] mb-7"
          style={{ color: 'rgba(201, 168, 76, 1)', fontFamily: "'Raleway', sans-serif" }}
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
                style={{
                  color: '#e4c558e3',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 300,
                }}
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
            border: '1px solid rgba(185, 28, 28, 0.91)',
            background: 'linear-gradient(135deg, rgba(202, 24, 24, 0.93), rgba(185, 28, 28, 1))',
            color: '#550f0fff',
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 500,
            boxShadow: '0 8px 25px rgba(185, 28, 28, 0.15)',
          }}
        >
          ✦ Por favor evitar el <strong style={{ color: 'rgba(22, 2, 2, 0.81)' }}>Celeste y blanco</strong>, reservado para la quinceañera
        </div>
      </div>
    </section>
  )
}
