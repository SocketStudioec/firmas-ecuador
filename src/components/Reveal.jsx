import { motion } from 'framer-motion'

// Reveal sutil al entrar en viewport. Respeta prefers-reduced-motion vía Framer.
export default function Reveal({ children, delay = 0, y = 18, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
