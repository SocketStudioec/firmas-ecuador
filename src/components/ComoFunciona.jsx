import Reveal from './Reveal'
import Icon from './Icon'
import { STEPS } from '../data'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative py-24">
      <div className="container-xl">
        <div className="max-w-2xl">
          <Reveal as="span" className="eyebrow">
            <Icon name="ListChecks" className="h-4 w-4" />
            Cómo funciona
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display mt-4 text-[2.1rem] text-ink sm:text-[2.7rem]">
              De un PDF a varias firmas verificadas, en tres pasos.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
              Tú creas el trámite; tus firmantes solo abren un enlace. Así de simple, con identidad verificada de punta a punta.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="card group relative h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[2.6rem] font-semibold leading-none text-paper-line transition-colors group-hover:text-royal-100">
                    {s.n}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-royal-100 bg-royal-50 px-3 py-1 text-[0.68rem] font-semibold text-royal-700">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[1.3rem] font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
