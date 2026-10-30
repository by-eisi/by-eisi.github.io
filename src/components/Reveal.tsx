import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT } from "../lib/motion";

type Props = { children: ReactNode; className?: string; delay?: number };

/** Rises out of a soft blur when it scrolls into view. */
export function Reveal({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}
