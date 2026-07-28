const program = [
  { time: '21:00', event: 'Recepción de invitados', icon: <img src="/copa-de-champan.png" alt="" width={18} height={18} /> },
  { time: '22:00', event: 'Entrada de la quinceañera', icon: <img src="/corona.png" alt="" width={18} height={18} /> },
  { time: '22:15', event: 'Cena de gala', icon: <img src="/bandeja.png" alt="" width={18} height={18} /> },
  { time: '23:00', event: 'Vals de honor', icon: <img src="/bailando.png" alt="" width={18} height={18} /> },
  { time: '00:30', event: 'Baile y celebración', icon: <img src="/notas-musicales.png" alt="" width={18} height={18} /> },
  { time: '05:00', event: 'Cierre de fiesta', icon: <img src="/estrella.png" alt="" width={18} height={18} /> },
]

export default function EventInfo() {
  return (
    <section
      className="py-20 px-6"
      style={{
        background:
          'linear-gradient(rgba(0, 58, 92, 0.15) 0%, rgba(0, 94, 140, 0.15) 60%, rgba(0, 140, 200, 0.15) 100%)',
      }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-3"
            style={{
              color: '#6ba6eb',
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            Programa
          </p>

          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(2rem, 6vw, 2.8rem)',
              background: 'linear-gradient(90deg, #cdffd8 0%, #94b9ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Una noche mágica
          </h2>

          <div
            className="mx-auto mt-5"
            style={{
              width: 80,
              height: 1,
              background:
                'linear-gradient(90deg, transparent, #6ba6eb, transparent)',
            }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea */}
          <div
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 sm:-translate-x-1/2"
            style={{
              width: 2,
              background:
                'linear-gradient(180deg, transparent, rgba(201,168,76,0.35), transparent)',
            }}
          />

          <div className="flex flex-col gap-6">
            {program.map((item, i) => {
              const isLeft = i % 2 === 0

              return (
                <div
                  key={item.time}
                  className={`relative flex items-center pl-12 sm:pl-0 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                >
                  {/* Tarjeta */}
                  <div
                    className={`flex-1 ${isLeft
                      ? 'sm:text-right sm:pr-8'
                      : 'sm:text-left sm:pl-8'
                      }`}
                  >
                    <div
                      className="inline-block rounded-sm px-5 py-4 transition-all duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(107,166,235,0.15)',
                        minWidth: 160,
                      }}
                      onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        'rgba(107,166,235,0.4)')
                      }
                      onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        'rgba(107,166,235,0.15)')
                      }
                    >
                      <p
                        className="text-xs uppercase tracking-[0.2em] mb-1"
                        style={{
                          color: '#6ba6eb',
                          fontFamily: "'Raleway', sans-serif",
                        }}
                      >
                        {item.time}
                      </p>

                      <p
                        className="text-sm"
                        style={{
                          color: '#E8F8FF',
                          fontFamily: "'Raleway', sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {item.event}
                      </p>
                    </div>
                  </div>

                  {/* Punto + ícono */}
                  <div
                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full z-10"
                    style={{
                      background: '#EAF4F8',
                      border: '1px solid #6ba6eb',
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Espacio lado opuesto (solo desktop) */}
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