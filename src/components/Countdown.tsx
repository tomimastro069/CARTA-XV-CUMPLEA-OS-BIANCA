import { useEffect, useState } from 'react'

// Oct 9 2026 19:00 local time
const TARGET = new Date(2026, 9, 9, 19, 0, 0).getTime()

function calc() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 }
  const totalMinutes = Math.floor(diff / 60000)
  const totalHours = Math.floor(totalMinutes / 60)
  return {
    days: Math.floor(totalHours / 24),
    hours: totalHours % 24,
    minutes: totalMinutes % 60,
  }
}

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    setTime(calc())
    const id = setInterval(() => setTime(calc()), 60000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Días', value: time.days },
    { label: 'Horas', value: time.hours },
    { label: 'Min', value: time.minutes },
  ]

  return (
    <section className="py-20 px-6" style={{ background: 'rgba(0, 58, 92, 0.05)' }}>
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-xs uppercase tracking-[0.3em] mb-3"
          style={{ color: '#a9c1dfff', fontFamily: "'Raleway', sans-serif" }}
        >
          Faltan
        </p>
        <h2
          className="mb-10"
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
          ¡Para el gran día!
        </h2>

        <div className="flex justify-center gap-4 sm:gap-8">
          {units.map(({ label, value }, i) => (
            <div key={label} className="flex flex-col items-center">
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: 'clamp(72px, 20vw, 96px)',
                  height: 'clamp(72px, 20vw, 96px)',
                  border: `1px solid ${i === 0 ? 'rgba(104, 173, 243, 0.76)' : 'rgba(104, 173, 243, 0.76)'}`,
                  background: 'rgba(107, 167, 235, 0.21)',
                }}
              >
                {(['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const).map(c => (
                  <span
                    key={c}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      background: '#b8e7ffff',
                      opacity: 0.4,
                      top: c.includes('top') ? -2 : 'auto',
                      bottom: c.includes('bottom') ? -2 : 'auto',
                      left: c.includes('left') ? -2 : 'auto',
                      right: c.includes('right') ? -2 : 'auto',
                    }}
                  />
                ))}
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 6vw, 2.6rem)',
                    color: '#E8F8FF',
                    lineHeight: 1,
                  }}
                >
                  {String(value).padStart(2, '0')}
                </span>
              </div>
              <span
                className="mt-2 uppercase tracking-[0.2em] text-xs"
                style={{ color: '#a9c1dfff', fontFamily: "'Raleway', sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
