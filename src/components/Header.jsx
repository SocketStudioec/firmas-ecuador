import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import Icon from './Icon'
import { NAV, CONTACT } from '../data'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-paper-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="container-xl flex h-[72px] items-center justify-between gap-4">
        <a href="#top" onClick={(e) => { e.preventDefault(); go('top') }} aria-label="Firma Transaccional — inicio">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="link-underline text-sm font-medium text-ink-soft transition-colors hover:text-royal-700"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONTACT.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-5 py-2.5 text-sm"
          >
            Ingresar
          </a>
          <button onClick={() => go('contacto')} className="btn-primary px-5 py-2.5 text-sm">
            Solicitar demo
            <Icon name="ArrowRight" className="h-4 w-4" />
          </button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-paper-line bg-white text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <Icon name={open ? 'X' : 'Menu'} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="border-t border-paper-line bg-paper px-5 pb-7 pt-3 lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Móvil">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className="border-b border-paper-line py-3.5 text-left text-[1.05rem] font-medium text-ink"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <a href={CONTACT.appUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full">
                Ingresar a la plataforma
              </a>
              <button onClick={() => go('contacto')} className="btn-primary w-full">
                Solicitar demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
