import Reveal from './Reveal'
import Icon from './Icon'

export default function CTA() {
  const go = () => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="bg-paper-warm py-20">
      <div className="container-xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-royal-600 px-8 py-14 text-center text-white shadow-float sm:px-14">
            <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <h2 className="h-display relative mx-auto max-w-2xl text-[2rem] sm:text-[2.8rem]">
              Empieza a firmar sin pedirle firma a nadie.
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-[1.05rem] text-white/80">
              Activa la Firma Transaccional y deja que tus clientes firmen con su rostro, desde cualquier lugar.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              <button onClick={go} className="btn bg-white px-7 py-3.5 text-royal-700 hover:bg-paper-warm hover:-translate-y-0.5">
                Solicitar demo
                <Icon name="ArrowRight" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
