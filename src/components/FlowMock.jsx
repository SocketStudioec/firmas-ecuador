import { motion } from 'framer-motion'
import Icon from './Icon'

// Mockup del producto: panel de trámite con escaneo biométrico + lista de firmantes.
// Construido en código (SVG + DOM), sin imágenes de stock ni IA.
const signers = [
  { name: 'María F. Cedeño', state: 'firmado' },
  { name: 'Jorge Andrade', state: 'en-proceso' },
  { name: 'Andrea Páez', state: 'pendiente' },
]

const stateMeta = {
  firmado: { label: 'Firmado', cls: 'bg-valid-50 text-valid-700 border-valid-100', dot: 'bg-valid' },
  'en-proceso': { label: 'Validando', cls: 'bg-scan-50 text-scan-700 border-scan-100', dot: 'bg-scan animate-pulse' },
  pendiente: { label: 'Pendiente', cls: 'bg-paper-warm text-ink-muted border-paper-line', dot: 'bg-ink-faint' },
}

export default function FlowMock() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* Tarjeta principal: panel de trámite */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="card overflow-hidden shadow-float"
      >
        <div className="flex items-center justify-between border-b border-paper-line px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-royal-600" />
            <span className="font-mono text-[0.72rem] font-medium tracking-tight text-ink-muted">
              trámite&nbsp;#TX-2041
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-valid-100 bg-valid-50 px-2.5 py-1 text-[0.66rem] font-semibold text-valid-700">
            <Icon name="ShieldCheck" className="h-3.5 w-3.5" />
            Validez legal
          </span>
        </div>

        {/* Documento + biometría */}
        <div className="grid grid-cols-5 gap-0">
          {/* mini documento */}
          <div className="col-span-2 border-r border-paper-line bg-paper-warm/60 p-4">
            <div className="rounded-lg border border-paper-line bg-white p-2.5 shadow-soft">
              <div className="space-y-1.5">
                {[10, 8, 9, 7, 9, 6].map((w, i) => (
                  <div key={i} className="h-1.5 rounded-full bg-paper-line" style={{ width: `${w * 10}%` }} />
                ))}
              </div>
              <div className="mt-3 flex items-center gap-1.5 rounded-md border border-royal-100 bg-royal-50 px-1.5 py-1">
                <Icon name="FileSignature" className="h-3 w-3 text-royal-600" />
                <span className="font-mono text-[0.56rem] text-royal-700">rúbrica · pág 3</span>
              </div>
            </div>
            <p className="mt-2.5 text-center font-mono text-[0.58rem] text-ink-faint">Contrato.pdf</p>
          </div>

          {/* escaneo biométrico */}
          <div className="col-span-3 p-4">
            <p className="mb-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Prueba de vida
            </p>
            <div className="relative mx-auto aspect-square w-[124px] overflow-hidden rounded-2xl border border-royal-100 bg-gradient-to-b from-royal-50 to-white">
              {/* rostro estilizado */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full p-4 text-royal-300" fill="none">
                <circle cx="50" cy="38" r="16" stroke="currentColor" strokeWidth="2.4" />
                <path d="M26 80c2-14 12-22 24-22s22 8 24 22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
              {/* marco biométrico */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full p-2.5 text-scan" fill="none">
                <path d="M8 22V12a4 4 0 0 1 4-4h10M78 8h10a4 4 0 0 1 4 4v10M92 78v10a4 4 0 0 1-4 4H78M22 92H12a4 4 0 0 1-4-4V78"
                  stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              {/* línea de escaneo */}
              <motion.div
                className="absolute inset-x-2 h-6 rounded-full bg-gradient-to-b from-scan/0 via-scan/35 to-scan/0"
                animate={{ y: [6, 96, 6] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <div className="mt-2.5 flex items-center justify-center gap-1.5 text-valid-700">
              <Icon name="Check" className="h-3.5 w-3.5" />
              <span className="text-[0.72rem] font-semibold">Identidad verificada</span>
            </div>
          </div>
        </div>

        {/* Lista de firmantes invitados */}
        <div className="border-t border-paper-line px-5 py-4">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-[0.72rem] font-semibold text-ink-soft">3 firmantes invitados</span>
            <span className="font-mono text-[0.66rem] text-ink-faint">1 / 3 firmado</span>
          </div>
          <ul className="space-y-2">
            {signers.map((s, i) => {
              const m = stateMeta[s.state]
              return (
                <motion.li
                  key={s.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
                  className="flex items-center justify-between rounded-xl border border-paper-line bg-white px-3 py-2"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-royal-50 text-[0.66rem] font-semibold text-royal-700">
                      {s.name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
                    </span>
                    <span className="text-[0.78rem] font-medium text-ink">{s.name}</span>
                  </span>
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold ${m.cls}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${m.dot}`} />
                    {m.label}
                  </span>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </motion.div>

      {/* Tarjeta flotante: enlace enviado */}
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -left-4 -top-5 hidden items-center gap-2.5 rounded-2xl border border-paper-line bg-white px-3.5 py-2.5 shadow-card sm:flex"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-scan-50 text-scan-700">
          <Icon name="Send" className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-[0.72rem] font-semibold text-ink">Enlace enviado</p>
          <p className="font-mono text-[0.6rem] text-ink-faint">a 3 correos</p>
        </div>
      </motion.div>
    </div>
  )
}
