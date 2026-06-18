import Logo from './Logo'
import Icon from './Icon'
import { NAV, CONTACT } from '../data'

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-paper-line bg-paper">
      <div className="container-xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
              Firma Transaccional es el módulo de Firmas Ecuador (Begroup) para firmar documentos con biometría e invitar a varios
              firmantes por enlace, sin necesidad de tener firma electrónica.
            </p>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-royal-700 link-underline"
            >
              <Icon name="Send" className="h-4 w-4" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink-faint">Navegación</h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button onClick={() => go(n.id)} className="text-[0.95rem] text-ink-soft transition-colors hover:text-royal-700">
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink-faint">Contacto</h3>
            <ul className="mt-5 space-y-3 text-[0.95rem] text-ink-soft">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-royal-700">{CONTACT.email}</a>
              </li>
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.city}</li>
              <li>
                <a href={CONTACT.parentUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-royal-700">
                  begroupec.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper-line pt-8 sm:flex-row sm:items-center">
          <p className="text-[0.84rem] text-ink-faint">
            © {year} Begroup · Firmas Ecuador. Todos los derechos reservados.
          </p>
          <p className="text-[0.84rem] text-ink-faint">
            Firma respaldada en la Ley de Comercio Electrónico, Firmas y Mensajes de Datos del Ecuador.
          </p>
        </div>
      </div>
    </footer>
  )
}
