import Reveal from './Reveal'
import Icon from './Icon'
import { CASOS } from '../data'

export default function Casos() {
  return (
    <section id="casos" className="bg-paper-warm py-24">
      <div className="container-xl">
        <div className="max-w-2xl">
          <Reveal as="span" className="eyebrow">
            <Icon name="Users" className="h-4 w-4" />
            Casos de uso
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display mt-4 text-[2.1rem] text-ink sm:text-[2.7rem]">
              Pensado para documentos que firman varias personas.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASOS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.07}>
              <article className="card group h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-royal-200 hover:shadow-card">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-royal-600/5 text-royal-600 ring-1 ring-inset ring-royal-100">
                  <Icon name="FileSignature" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-[1.22rem] font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
