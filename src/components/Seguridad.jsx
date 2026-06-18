import Reveal from './Reveal'
import Icon from './Icon'
import { SECURITY, STATS } from '../data'

export default function Seguridad() {
  return (
    <section id="seguridad" className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '46px 46px',
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-royal-600/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 -bottom-24 h-96 w-96 rounded-full bg-scan/15 blur-3xl" aria-hidden="true" />

      <div className="container-xl relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal as="span" className="eyebrow !text-scan">
            <Icon name="ShieldCheck" className="h-4 w-4" />
            Seguridad y validez legal
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display mt-4 text-[2.1rem] sm:text-[2.7rem]">
              Sabes <span className="text-scan">quién</span> firma, no solo que se firmó.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-white/70">
              Cada firma combina reconocimiento facial con prueba de vida, geolocalización y sello de tiempo. El proceso se
              respalda en la Ley de Comercio Electrónico, Firmas y Mensajes de Datos del Ecuador, y queda registrado para auditoría.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {SECURITY.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="bg-ink p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-scan">{s.label}</p>
                  <p className="mt-1.5 text-[0.98rem] font-medium text-white">{s.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((st, i) => (
            <Reveal key={st.label} delay={i * 0.08}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                <p className="nums font-display text-[2.6rem] font-semibold leading-none text-white">
                  {st.value}
                  <span className="text-scan">{st.suffix}</span>
                </p>
                <p className="mt-3 text-[0.86rem] leading-snug text-white/65">{st.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
