import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger delay in seconds. */
  delay?: number
  /** Travel distance in px along Y before settling. */
  y?: number
}

/**
 * Scroll-driven reveal used across the ledger. framer-motion `whileInView`
 * fades + lifts the block into place once, when it enters the viewport.
 */
export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
