import Reveal from './Reveal'
import Icon from './Icon'
import { TESTIMONIOS } from '../data'

export default function Testimonios() {
  return (
    <section className="bg-ink py-24 text-white">
      <div className="container-xl">
        <div className="max-w-2xl">
          <Reveal as="span" className="eyebrow !text-scan">
            <Icon name="Quote" className="h-4 w-4" />
            Lo que dicen
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display mt-4 text-[2.1rem] sm:text-[2.7rem]">
              Equipos que dejaron de perseguir firmas.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIOS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <Icon name="Quote" className="h-7 w-7 text-scan/70" />
                <blockquote className="mt-4 flex-1 text-[1rem] leading-relaxed text-white/85">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-display text-[1.02rem] font-semibold text-white">{t.name}</p>
                  <p className="text-[0.84rem] text-white/55">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
