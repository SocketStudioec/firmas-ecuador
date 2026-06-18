import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'
import { CONTACT } from '../data'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', empresa: '', correo: '', firmas: '3-5', mensaje: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const texto =
      `Hola, soy ${form.nombre || '—'}${form.empresa ? ` de ${form.empresa}` : ''}.%0A` +
      `Me interesa la Firma Transaccional.%0A` +
      `Firmantes por documento: ${form.firmas}.%0A` +
      `Correo: ${form.correo || '—'}.%0A` +
      `${form.mensaje ? 'Mensaje: ' + form.mensaje : ''}`
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${texto}`, '_blank', 'noopener')
  }

  return (
    <section id="contacto" className="py-24">
      <div className="container-xl">
        <div className="overflow-hidden rounded-[2rem] border border-paper-line bg-white shadow-card lg:grid lg:grid-cols-2">
          {/* Lado info */}
          <div className="relative overflow-hidden bg-ink p-9 text-white sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-royal-600/35 blur-3xl" aria-hidden="true" />
            <Reveal as="span" className="eyebrow !text-scan">
              <Icon name="Send" className="h-4 w-4" />
              Solicitar demo
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-4 text-[2rem] sm:text-[2.4rem]">
                Hablemos de tu primer trámite.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-white/70">
                Te mostramos en vivo cómo firmar con biometría e invitar a varias personas. Sin compromiso.
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 text-white/85 transition-colors hover:text-white">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Icon name="MailCheck" className="h-5 w-5 text-scan" />
                </span>
                <span>
                  <span className="block text-[0.72rem] uppercase tracking-[0.16em] text-white/45">Correo</span>
                  <span className="text-[0.98rem] font-medium">{CONTACT.email}</span>
                </span>
              </a>
              <a href={`tel:+59322762790`} className="flex items-center gap-4 text-white/85 transition-colors hover:text-white">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Icon name="Clock" className="h-5 w-5 text-scan" />
                </span>
                <span>
                  <span className="block text-[0.72rem] uppercase tracking-[0.16em] text-white/45">Teléfono</span>
                  <span className="text-[0.98rem] font-medium">{CONTACT.phone}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 text-white/85">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Icon name="MapPin" className="h-5 w-5 text-scan" />
                </span>
                <span>
                  <span className="block text-[0.72rem] uppercase tracking-[0.16em] text-white/45">Ubicación</span>
                  <span className="text-[0.98rem] font-medium">{CONTACT.city}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="p-9 sm:p-12">
            <form onSubmit={submit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" id="nombre">
                  <input id="nombre" required value={form.nombre} onChange={update('nombre')} className={inputCls} placeholder="Tu nombre" />
                </Field>
                <Field label="Empresa" id="empresa">
                  <input id="empresa" value={form.empresa} onChange={update('empresa')} className={inputCls} placeholder="Opcional" />
                </Field>
              </div>
              <Field label="Correo" id="correo">
                <input id="correo" type="email" required value={form.correo} onChange={update('correo')} className={inputCls} placeholder="tucorreo@empresa.com" />
              </Field>
              <Field label="¿Cuántas personas firman por documento?" id="firmas">
                <select id="firmas" value={form.firmas} onChange={update('firmas')} className={inputCls}>
                  <option value="1-2">1 a 2 personas</option>
                  <option value="3-5">3 a 5 personas</option>
                  <option value="6+">6 o más personas</option>
                </select>
              </Field>
              <Field label="Mensaje" id="mensaje">
                <textarea id="mensaje" rows={3} value={form.mensaje} onChange={update('mensaje')} className={`${inputCls} resize-none`} placeholder="Cuéntanos tu caso (opcional)" />
              </Field>

              <button type="submit" className="btn-primary w-full">
                Enviar por WhatsApp
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </button>
              <p className="text-center text-[0.8rem] text-ink-faint">
                Te respondemos en horario laboral. Al enviar abrimos WhatsApp con tus datos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const inputCls =
  'w-full rounded-xl border border-paper-line bg-paper-warm/40 px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint transition-colors focus:border-royal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-royal-100'

function Field({ label, id, children }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-[0.8rem] font-semibold text-ink-soft">{label}</span>
      {children}
    </label>
  )
}
