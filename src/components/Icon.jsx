import {
  ScanFace, Link2, FileSignature, MapPin, ListChecks, ShieldCheck,
  Ban, MailCheck, Lock, Check, ArrowRight, ArrowUpRight, Menu, X,
  Plus, Minus, Quote, Sparkles, Fingerprint, Send, Clock, Users,
} from 'lucide-react'

const MAP = {
  ScanFace, Link2, FileSignature, MapPin, ListChecks, ShieldCheck,
  Ban, MailCheck, Lock, Check, ArrowRight, ArrowUpRight, Menu, X,
  Plus, Minus, Quote, Sparkles, Fingerprint, Send, Clock, Users,
}

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.75, ...rest }) {
  const Cmp = MAP[name] || ShieldCheck
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />
}
