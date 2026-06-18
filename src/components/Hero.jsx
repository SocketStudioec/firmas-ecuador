import { motion } from 'framer-motion'
import Icon from './Icon'
import FlowMock from './FlowMock'
import { CONTACT } from '../data'

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
}

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      {/* fondo editorial */}
      <div className="pointer-events-none absolute inset-0 grid-paper opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 -top-24 h-[480px] w-[480px] rounded-full bg-scan-50 blur-3xl opacity-50" aria-hidden="true" />

      <div className="container-xl relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Texto */}
        <div>
          <motion.span variants={fade} initial="hidden" animate="show" custom={0} className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-scan" />
            Nuevo módulo · Firmas Ecuador by Begroup
          </motion.span>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="h-display mt-5 text-[2.5rem] !leading-[1.16] text-ink sm:text-[3.4rem] sm:!leading-[1.08] lg:text-[3.85rem]"
          >
            Firma documentos con{' '}
            <span className="relative whitespace-nowrap text-royal-600">
              biometría
              <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 6C50 2 150 2 198 6" stroke="#16C0E6" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
            , sin tener firma electrónica.
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 max-w-xl text-pretty text-[1.08rem] leading-relaxed text-ink-soft"
          >
            La <strong className="font-semibold text-ink">Firma Transaccional</strong> te deja firmar un PDF validando tu
            identidad con prueba de vida —una sola vez— y enviar un enlace a 3, 4 o 5 personas para que firmen también con su
            biometría. Nadie necesita comprar un certificado <span className="font-mono text-[0.95em]">.p12</span>.
          </motion.p>

          <motion.div variants={fade} initial="hidden" animate="show" custom={3} className="mt-9 flex flex-wrap items-center gap-3">
            <button onClick={() => go('contacto')} className="btn-primary">
              Solicitar demo
              <Icon name="ArrowRight" className="h-4 w-4" />
            </button>
            <button onClick={() => go('como-funciona')} className="btn-ghost">
              Ver cómo funciona
            </button>
          </motion.div>

          <motion.ul
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5"
          >
            {[
              { icon: 'Fingerprint', t: 'Prueba de vida' },
              { icon: 'Link2', t: 'Multifirmante por enlace' },
              { icon: 'ShieldCheck', t: 'Validez legal en Ecuador' },
            ].map((f) => (
              <li key={f.t} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                <Icon name={f.icon} className="h-4 w-4 text-royal-600" />
                {f.t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Mockup */}
        <div className="relative">
          <FlowMock />
        </div>
      </div>
    </section>
  )
}
