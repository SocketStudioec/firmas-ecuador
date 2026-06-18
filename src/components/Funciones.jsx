import Reveal from './Reveal'
import Icon from './Icon'
import { FEATURES } from '../data'

export default function Funciones() {
  return (
    <section id="funciones" className="py-24">
      <div className="container-xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal as="span" className="eyebrow">
              <Icon name="Sparkles" className="h-4 w-4" />
              Funciones
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-4 text-[2.1rem] text-ink sm:text-[2.7rem]">
                Todo lo que necesitas para firmar con confianza.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-[0.98rem] leading-relaxed text-ink-soft">
              Capacidades reales del módulo de Firma Transaccional, pensadas para que cada documento tenga respaldo legal y trazabilidad completa.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <div className="group h-full bg-white p-7 transition-colors duration-300 hover:bg-paper-warm/50">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-royal-50 text-royal-600 transition-colors group-hover:bg-royal-600 group-hover:text-white">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-[1.18rem] font-semibold text-ink">{f.title}</h3>
                <p className="mt-2.5 text-[0.94rem] leading-relaxed text-ink-soft">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
