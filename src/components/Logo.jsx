// Logotipo Firma Transaccional — marca propia tipográfica + glifo de firma/scan.
// Evita imágenes de IA: glifo SVG geométrico (trazo de firma dentro de marco biométrico).
export default function Logo({ className = '', dark = false }) {
  const fg = dark ? '#FFFFFF' : '#0B1020'
  const sub = dark ? 'rgba(255,255,255,0.62)' : '#5A6178'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-royal-600 shadow-ring">
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden="true">
          {/* esquinas de marco biométrico */}
          <path d="M5 9V6.5A1.5 1.5 0 0 1 6.5 5H9M23 5h2.5A1.5 1.5 0 0 1 27 6.5V9M27 23v2.5a1.5 1.5 0 0 1-1.5 1.5H23M9 27H6.5A1.5 1.5 0 0 1 5 25.5V23"
            stroke="#16C0E6" strokeWidth="1.8" strokeLinecap="round" />
          {/* trazo de firma */}
          <path d="M9.5 19.5c2.2 0 2.4-7 3.6-7 1 0 1 5 2.1 5 1.3 0 1.8-9 3.2-9 1.1 0 1.1 8 2.2 8 .9 0 1.3-2.4 1.9-2.4"
            stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-semibold tracking-tight" style={{ color: fg }}>
          Firma <span className="text-royal-600" style={dark ? { color: '#16C0E6' } : undefined}>Transaccional</span>
        </span>
        <span className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em]" style={{ color: sub }}>
          by Begroup · Firmas Ecuador
        </span>
      </span>
    </span>
  )
}
