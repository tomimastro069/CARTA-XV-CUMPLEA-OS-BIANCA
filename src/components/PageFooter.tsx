export default function PageFooter() {
  return (
    <footer
      className="py-14 px-6 text-center"
      style={{
        background: 'linear-gradient(180deg, #005f8f 0%, #003a5c 100%)',
        borderTop: '2px solid #002c45',
      }}
    >

      <div
        className="inline-flex items-center justify-center rounded-full mb-5"
        style={{
          width: 52,
          height: 52,
          border: '1px solid rgba(201,168,76,0.3)',
          background: 'rgba(201,168,76,0.05)',
        }}
      >
        <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.6rem', color: '#c9a84c' }}>
          B
        </span>
      </div>

      <p
        style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: '1.6rem',
          color: '#E8F8FF',
        }}
      >
        Bianca Mastropietro
      </p>
      <p
        className="mt-1 text-xs uppercase tracking-[0.25em]"
        style={{ color: 'rgba(148,231,255,0.6)', fontFamily: "'Raleway', sans-serif" }}
      >
        XV Años · 09 · 10 · 2026
      </p>

      <div
        className="mx-auto mt-8"
        style={{
          width: 60,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)',
        }}
      />

      <p
        className="mt-6 text-xs"
        style={{ color: 'rgba(148,231,255,0.55)', fontFamily: "'Raleway', sans-serif" }}
      >
        Hecho con amor para este día especial.                       Todos los derechos reservados ©
      </p>
    </footer>
  )
}
