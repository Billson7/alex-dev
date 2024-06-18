import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

export const Section = ({ children }: { children: ReactNode }): ReactNode => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="section"
    >
      {children}
    </motion.section>
  )
}
