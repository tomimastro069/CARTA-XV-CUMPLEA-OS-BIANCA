import { useState } from 'react'
import Crown from './Crown'
import MarbleBackground from './MarbleBackground'

const WHATSAPP_NUMBER = '5492615367418'
const WHATSAPP_MESSAGE = encodeURIComponent(
  '¡Hola! confirmo mi asistencia a tu cumple de xv el viernes 9 de octubre. ¡Nos vemos alla!'
)

const gold = '#c9a84c'
const goldLight = '#e4c96a'
const silver = '#d8e2ec'
const silverFaint = 'rgba(216,226,236,0.7)'

export default function InvitationCard() {
  const [confirmed, setConfirmed] = useState(false)

  const handleRSVP = () => {
    setConfirmed(true)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, '_blank')
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maxWidth: 480,
        borderRadius: 4,
        border: `1px solid rgba(201,168,76,0.35)`,
        boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,168,76,0.12)',
      }}
    >
      {/* Marble background */}
      <MarbleBackground />

      {/* Outer gold frame lines */}
      <div
        className="absolute inset-[10px] pointer-events-none z-10"
        style={{ border: `1px solid rgba(201,168,76,0.22)` }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center px-8 py-10 text-center">

        {/* Crown */}
        <Crown color={gold} size={52} />

        {/* Top tagline */}
        <p
          className="mt-4 text-xs uppercase tracking-[0.22em] leading-relaxed"
          style={{ color: silverFaint, fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
        >
          Acompáñanos a celebrar los
          <br />
          <span style={{ color: gold, letterSpacing: '0.28em' }}>XV Años de</span>
        </p>

        {/* Gold divider */}
        <GoldLine width={120} my={16} />

        {/* Name in script */}
        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(2.8rem, 10vw, 3.8rem)',
            color: goldLight,
            lineHeight: 1.15,
            textShadow: '0 0 40px rgba(201,168,76,0.35)',
          }}
        >
          Bianca Mastropietro
        </h1>

        {/* Invitation body */}
        <p
          className="mt-5 text-sm leading-loose"
          style={{
            color: silverFaint,
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 300,
            maxWidth: 340,
          }}
        >
          Con la bendición de Dios y el amor de su
          familia, nos alegra invitarte a compartir este
          día tan especial con nosotros.
        </p>

        {/* Padres / Padrinos */}
        <div className="mt-7 w-full flex justify-between gap-4">
          <PartyBlock title="Padres">
            <span>Miguel Mastropietro</span>
            <span>Jimena Heer</span>
          </PartyBlock>
          <div style={{ width: 1, background: 'rgba(201,168,76,0.2)', flexShrink: 0 }} />
          <PartyBlock title="Padrinos">
            <span>German Heer</span>
            <span>&amp; Familia</span>
          </PartyBlock>
        </div>

        <GoldLine width={200} my={20} />

        {/* Date block */}
        <p
          className="uppercase tracking-[0.3em] text-xs"
          style={{ color: gold, fontFamily: "'Raleway', sans-serif" }}
        >
          Octubre
        </p>

        <div className="flex items-center gap-4 mt-1">
          <GoldLine width={48} />
          <div className="flex items-baseline gap-2">
            <span
              className="font-display"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '4.5rem',
                color: silver,
                lineHeight: 1,
                fontWeight: 400,
              }}
            >
              09
            </span>
          </div>
          <GoldLine width={48} />
        </div>

        <div className="mt-1 flex items-center gap-3">
          <span
            className="text-xs uppercase tracking-[0.25em]"
            style={{ color: silverFaint, fontFamily: "'Raleway', sans-serif" }}
          >
            Sábado
          </span>
          <span style={{ color: gold, fontSize: 10 }}>✦</span>
          <span
            className="text-xs uppercase tracking-[0.25em]"
            style={{ color: silverFaint, fontFamily: "'Raleway', sans-serif" }}
          >
            9:00 pm
          </span>
        </div>

        {/* Venue */}
        <div className="mt-5 text-center">
          <p
            className="text-xs uppercase tracking-[0.2em]"
            style={{ color: gold, fontFamily: "'Raleway', sans-serif" }}
          >
            Recepción
          </p>
          <p
            className="mt-1 text-sm"
            style={{ color: silver, fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
          >
            Quinta la fermina
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: silverFaint, fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
          >
            Acceso Sur - Lateral Este 4389, M5507, Mendoza


          </p>
        </div>

        <GoldLine width={160} my={18} />

        {/* Closing script */}
        <p
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: '2.4rem',
            color: goldLight,
            textShadow: '0 0 30px rgba(201,168,76,0.3)',
            lineHeight: 1.2,
          }}
        >
          ¡Te esperamos!
        </p>

        {/* WhatsApp CTA */}
        <button
          onClick={handleRSVP}
          disabled={confirmed}
          className="mt-8 flex items-center gap-2.5 px-7 py-3 text-xs uppercase tracking-[0.18em] transition-all duration-300"
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 600,
            background: confirmed
              ? 'rgba(201,168,76,0.1)'
              : 'linear-gradient(135deg, #b8902e 0%, #e8c96a 50%, #b8902e 100%)',
            color: confirmed ? gold : '#0a0f2e',
            border: `1px solid ${gold}`,
            borderRadius: 2,
            boxShadow: confirmed ? 'none' : '0 6px 28px rgba(201,168,76,0.25)',
            cursor: confirmed ? 'default' : 'pointer',
          }}
        >
          <WhatsAppIcon confirmed={confirmed} />
          {confirmed ? '¡Asistencia confirmada! 🎉' : 'Confirmar asistencia'}
        </button>

        {!confirmed && (
          <p
            className="mt-2 text-xs"
            style={{ color: 'rgba(216,226,236,0.35)', fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
          >
            Abre WhatsApp con mensaje prellenado
          </p>
        )}
      </div>
    </div>
  )
}

function GoldLine({ width, my }: { width: number; my?: number }) {
  return (
    <div
      style={{
        width,
        height: 1,
        flexShrink: 0,
        background: `linear-gradient(90deg, transparent, #c9a84c, transparent)`,
        marginTop: my,
        marginBottom: my,
      }}
    />
  )
}

function PartyBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex-1 text-center">
      <p
        className="text-xs uppercase tracking-[0.2em] mb-1.5"
        style={{ color: gold, fontFamily: "'Raleway', sans-serif" }}
      >
        {title}
      </p>
      <div
        className="flex flex-col gap-0.5 text-xs leading-relaxed"
        style={{ color: silverFaint, fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
      >
        {children}
      </div>
    </div>
  )
}

function WhatsAppIcon({ confirmed }: { confirmed: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={confirmed ? gold : '#0a0f2e'} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
    </svg>
  )
}
