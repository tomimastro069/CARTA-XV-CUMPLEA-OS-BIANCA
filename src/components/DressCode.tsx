const palette = [
  { color: '#1a1a2e', name: 'Negro' },
  { color: '#b60c839c', name: 'Rosado' },
  { color: '#c0c8d4', name: 'Plateado' },
  { color: '#c9a84c', name: 'Dorado' },
  { color: '#9306eab4', name: 'Morado' },
]


export default function DressCode() {
  return (
    <section className="py-20 px-6" style={{ background: 'rgba(232, 225, 208, 0.25)' }}>
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <p
          className="text-xs uppercase tracking-[0.3em] mb-3"
          style={{ color: '#5b8fd9', fontFamily: "'Raleway', sans-serif" }}
        >
          Vestimenta
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
          Formal de gala
        </h2>
        <div
          className="mx-auto mt-5 mb-10"
          style={{
            width: 80,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #5b8fd9, transparent)',
          }}
        />

        {/* Dress code note */}
        <p
          className="mb-10 text-sm leading-relaxed"
          style={{ color: 'rgba(27,58,107,0.7)', fontFamily: "'Raleway', sans-serif", fontWeight: 300, maxWidth: 400, margin: '0 auto 2.5rem' }}
        >
          Te pedimos asistir en vestimenta formal. Para las damas, vestido largo o midi.
          Para los caballeros, traje o smoking.
        </p>

        {/* Color palette */}
        <p
          className="text-xs uppercase tracking-[0.40em] mb-7"
          style={{ color: '#27466eff', fontFamily: "'Raleway', sans-serif" }}
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
                  border: '1px solid rgba(107,166,235,0.25)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                }}
              />
              <span
                className="text-xs"
                style={{
                  color: '#1B3A6B',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 500,
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
            border: '1px solid rgba(201, 168, 76, 1)',
            background: 'linear-gradient(135deg, rgba(202, 167, 71, 1), rgba(201, 168, 76, 1))',
            color: '#550f0fff',
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 500,
            boxShadow: '0 8px 25px rgba(185, 28, 28, 0.15)',
          }}
        >
          ✦ Por favor evitar el <strong style={{ color: 'rgba(22, 2, 2, 0.88)' }}>Celeste, Azul y blanco</strong>, reservado para la quinceañera
        </div>
      </div>
    </section>
  )
}

