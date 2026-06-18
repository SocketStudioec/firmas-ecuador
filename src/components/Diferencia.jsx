import Reveal from './Reveal'
import Icon from './Icon'
import { COMPARE } from '../data'

export default function Diferencia() {
  return (
    <section id="diferencia" className="relative bg-paper-warm py-24">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="span" className="eyebrow">
            <Icon name="Fingerprint" className="h-4 w-4" />
            La diferencia
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display mt-4 text-[2.1rem] text-ink sm:text-[2.7rem]">
              Firmar ya no depende de que todos tengan firma electrónica.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Antes */}
          <Reveal>
            <div className="h-full rounded-3xl border border-paper-line bg-white/70 p-8">
              <h3 className="font-display text-[1.3rem] font-semibold text-ink-muted">{COMPARE.before.title}</h3>
              <ul className="mt-6 space-y-4">
                {COMPARE.before.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[0.98rem] text-ink-soft">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper-warm text-ink-faint">
                      <Icon name="X" className="h-3.5 w-3.5" strokeWidth={2.2} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Con Firma Transaccional */}
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-royal-200 bg-white p-8 shadow-ring">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-scan-50 blur-2xl" aria-hidden="true" />
              <h3 className="relative font-display text-[1.3rem] font-semibold text-royal-700">{COMPARE.after.title}</h3>
              <ul className="relative mt-6 space-y-4">
                {COMPARE.after.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[0.98rem] font-medium text-ink">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-valid-50 text-valid-700">
                      <Icon name="Check" className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
