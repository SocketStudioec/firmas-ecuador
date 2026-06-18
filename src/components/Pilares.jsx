import Reveal from './Reveal'
import Icon from './Icon'
import { PILLARS } from '../data'

// Pilares de marca (be Grupo Empresarial / Begroup): refuerzo de confianza temprano.
export default function Pilares() {
  return (
    <section aria-label="Pilares de confianza" className="py-16">
      <div className="container-xl">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-paper-line bg-paper-line md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="flex h-full items-start gap-4 bg-white p-7">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-royal-50 text-royal-600">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-[1.12rem] font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-soft">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
