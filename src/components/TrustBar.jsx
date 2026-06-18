import Icon from './Icon'
import { TRUST } from '../data'

export default function TrustBar() {
  const items = [...TRUST, ...TRUST]
  return (
    <section aria-label="Garantías" className="border-y border-paper-line bg-white py-4">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
          {items.map((t, i) => (
            <span key={i} className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-ink-soft">
              <Icon name="Check" className="h-4 w-4 text-valid" />
              {t}
              <span className="ml-10 h-1 w-1 rounded-full bg-paper-line" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
