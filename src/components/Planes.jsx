import Reveal from './Reveal'
import Icon from './Icon'
import { PLANES, CONTACT } from '../data'

export default function Planes() {
  const go = () => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="planes" className="py-24">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="span" className="eyebrow">
            <Icon name="ListChecks" className="h-4 w-4" />
            Planes
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display mt-4 text-[2.1rem] text-ink sm:text-[2.7rem]">
              Pagas por las firmas que usas.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
              Contratas un paquete y cada firmante que completa su firma lo descuenta. Sin licencias por usuario ni costos por dispositivo.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 ${
                  p.featured
                    ? 'border-royal-600 bg-ink text-white shadow-float lg:-translate-y-3'
                    : 'border-paper-line bg-white shadow-soft hover:-translate-y-1 hover:shadow-card'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-scan px-3 py-1 text-[0.66rem] font-bold uppercase tracking-wider text-ink">
                    {p.highlight}
                  </span>
                )}
                <h3 className={`font-display text-[1.5rem] font-semibold ${p.featured ? 'text-white' : 'text-ink'}`}>
                  {p.name}
                </h3>
                {!p.featured && (
                  <span className="mt-1 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-royal-600">
                    {p.highlight}
                  </span>
                )}
                <p className={`mt-3 text-[0.95rem] leading-relaxed ${p.featured ? 'text-white/70' : 'text-ink-soft'}`}>
                  {p.desc}
                </p>

                <ul className="mt-7 flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-[0.92rem] ${p.featured ? 'text-white/85' : 'text-ink-soft'}`}>
                      <Icon
                        name="Check"
                        className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? 'text-scan' : 'text-valid'}`}
                        strokeWidth={2.4}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={go}
                  className={`mt-8 w-full ${p.featured ? 'btn bg-white px-6 py-3.5 text-ink hover:bg-paper-warm' : 'btn-primary'}`}
                >
                  {p.cta}
                  <Icon name="ArrowRight" className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-ink-faint">
            ¿No sabes cuántas firmas necesitas?{' '}
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-royal-700 link-underline"
            >
              Te ayudamos a calcularlo.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
