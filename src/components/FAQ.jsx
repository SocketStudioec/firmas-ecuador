import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import Icon from './Icon'
import { FAQ as FAQ_DATA } from '../data'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-24">
      <div className="container-xl grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal as="span" className="eyebrow">
            <Icon name="Sparkles" className="h-4 w-4" />
            Preguntas frecuentes
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display mt-4 text-[2.1rem] text-ink sm:text-[2.6rem]">
              Resolvemos tus dudas antes de empezar.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[1rem] leading-relaxed text-ink-soft">
              ¿Te queda otra pregunta? Escríbenos y un asesor te explica el flujo completo en minutos.
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-paper-line border-y border-paper-line">
          {FAQ_DATA.map((item, i) => {
            const active = open === i
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div>
                  <button
                    onClick={() => setOpen(active ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={active}
                  >
                    <span className={`font-display text-[1.12rem] font-medium transition-colors ${active ? 'text-royal-700' : 'text-ink'}`}>
                      {item.q}
                    </span>
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                        active ? 'rotate-180 border-royal-600 bg-royal-600 text-white' : 'border-paper-line text-ink-muted'
                      }`}
                    >
                      <Icon name={active ? 'Minus' : 'Plus'} className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-[0.98rem] leading-relaxed text-ink-soft">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
