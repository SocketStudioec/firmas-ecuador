import Reveal from './Reveal'
import Icon from './Icon'
import { DISTRIBUTOR, CONTACT } from '../data'

export default function Distribuidores() {
  return (
    <section id="distribuidores" className="bg-paper-warm py-24">
      <div className="container-xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <Reveal as="span" className="eyebrow">
              <Icon name="Users" className="h-4 w-4" />
              Programa de distribuidores
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-4 text-[2.1rem] text-ink sm:text-[2.7rem]">{DISTRIBUTOR.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft">{DISTRIBUTOR.subtitle}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappDist)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-9"
              >
                {DISTRIBUTOR.cta}
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="space-y-4">
            {DISTRIBUTOR.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-paper-line bg-white p-6 shadow-soft">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-royal-600 text-white">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.18rem] font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-[0.94rem] leading-relaxed text-ink-soft">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
