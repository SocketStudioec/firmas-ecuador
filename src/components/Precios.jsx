import Reveal from './Reveal'
import Icon from './Icon'
import { PRICING, CONTACT } from '../data'

export default function Precios() {
  const wa = (firmas) =>
    `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
      `Hola, quiero comprar el Bloc ${firmas} de Firma Transaccional.`,
    )}`

  return (
    <section id="precios" className="py-24">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="span" className="eyebrow">
            <Icon name="ListChecks" className="h-4 w-4" />
            Precios
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display mt-4 text-[2.1rem] text-ink sm:text-[2.7rem]">
              Compra un bloc de firmas. Úsalo o revéndelo.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
              Cada firma completada descuenta del bloc. Mientras más grande el bloc, menor el precio por firma.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-paper-line bg-white shadow-card">
            {/* Encabezado de tabla */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 bg-ink px-6 py-4 text-white sm:px-8">
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white/70">
                Bloc de firmas
              </span>
              <span className="text-right text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-center">
                Precio por firma
              </span>
              <span className="text-right text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-scan">
                PVP IVA incl.
              </span>
            </div>

            {/* Filas */}
            <div className="divide-y divide-paper-line">
              {PRICING.blocs.map((b) => {
                const perFirma = b.precio / b.firmas
                const ahorro = Math.round((1 - perFirma / PRICING.baseUnit) * 100)
                return (
                  <a
                    key={b.firmas}
                    href={wa(b.firmas)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 px-6 py-5 transition-colors sm:px-8 ${
                      b.featured ? 'bg-royal-50/60 hover:bg-royal-50' : 'hover:bg-paper-warm/60'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          b.featured ? 'bg-royal-600 text-white' : 'bg-royal-50 text-royal-600'
                        }`}
                      >
                        <Icon name="FileSignature" className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block whitespace-nowrap font-display text-[1.25rem] font-semibold text-ink">
                          Bloc {b.firmas}
                        </span>
                        <span className="block text-[0.78rem] text-ink-faint">{b.firmas} firmas</span>
                        {b.badge && (
                          <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-scan-50 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wide text-scan-700">
                            {b.badge}
                          </span>
                        )}
                      </span>
                    </span>

                    <span className="text-right sm:text-center">
                      <span className="nums block font-mono text-[0.98rem] font-medium text-ink-soft">
                        ${perFirma.toFixed(2)}
                      </span>
                      {ahorro > 0 && (
                        <span className="nums text-[0.72rem] font-semibold text-valid-600">−{ahorro}%</span>
                      )}
                    </span>

                    <span className="flex items-center justify-end gap-2">
                      <span className="nums font-display text-[1.6rem] font-semibold text-royal-700">
                        ${b.precio}
                      </span>
                      <Icon
                        name="ArrowRight"
                        className="h-4 w-4 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:text-royal-600"
                      />
                    </span>
                  </a>
                )
              })}
            </div>

            {/* Nota */}
            <div className="flex flex-col items-start justify-between gap-3 border-t border-paper-line bg-paper-warm/40 px-6 py-4 sm:flex-row sm:items-center sm:px-8">
              <p className="text-[0.82rem] text-ink-muted">{PRICING.note}</p>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappDist)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-[0.85rem] font-semibold text-royal-700 link-underline"
              >
                ¿Compras volumen? Precio de distribuidor →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
