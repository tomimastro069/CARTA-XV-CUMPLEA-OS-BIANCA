const program = [
  { time: '9:00 pm', event: 'Recepción de invitados', icon: '🥂' },
  { time: '10:00 pm', event: 'Entrada de la quinceañera', icon: '👑' },
  { time: '10:15 pm', event: 'Vals de honor', icon: '💃' },
  { time: '11:00 pm', event: 'Cena de gala', icon: '🍽️' },
  { time: '12:30 am', event: 'Baile y celebración', icon: '🎶' },
  { time: '5:00 am', event: 'Cierre de fiesta', icon: '✨' },
]

export default function EventInfo() {
  return (
    <section
      className="py-20 px-6"
      style={{
        background: 'linear-gradient(180deg, rgba(6,9,30,0.9) 0%, rgba(10,18,48,0.9) 60%, rgba(6,9,30,0.9) 100%)',
      }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: '#c9a84c', fontFamily: "'Raleway', sans-serif" }}
          >
            Programa
          </p>
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(2rem, 6vw, 2.8rem)',
              color: '#e4c96a',
            }}
          >
            Una noche mágica
          </h2>
          <div
            className="mx-auto mt-5"
            style={{
              width: 80,
              height: 1,
              background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
            }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden sm:block"
            style={{ width: 1, background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)' }}
          />

          <div className="flex flex-col gap-6">
            {program.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={item.time}
                  className={`flex items-center gap-4 sm:gap-0 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Content side */}
                  <div className={`flex-1 ${isLeft ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'}`}>
                    <div
                      className="inline-block rounded-sm px-5 py-4 transition-all duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(201,168,76,0.15)',
                        minWidth: 160,
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)')}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.15)')}
                    >
                      <p
                        className="text-xs uppercase tracking-[0.2em] mb-1"
                        style={{ color: '#c9a84c', fontFamily: "'Raleway', sans-serif" }}
                      >
                        {item.time}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: '#d8e2ec', fontFamily: "'Raleway', sans-serif", fontWeight: 400 }}
                      >
                        {item.event}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className="hidden sm:flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full z-10"
                    style={{
                      background: '#060c20',
                      border: '1px solid rgba(201,168,76,0.4)',
                    }}
                  >
                    <span style={{ fontSize: '1rem', lineHeight: 1 }}>{item.icon}</span>
                  </div>

                  {/* Mobile icon */}
                  <div
                    className="sm:hidden flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full"
                    style={{ border: '1px solid rgba(201,168,76,0.3)', background: '#060c20' }}
                  >
                    <span style={{ fontSize: '0.9rem' }}>{item.icon}</span>
                  </div>

                  {/* Empty opposite side */}
                  <div className="flex-1 hidden sm:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
