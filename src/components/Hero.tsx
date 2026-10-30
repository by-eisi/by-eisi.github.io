import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT } from "../lib/motion";
import { Headline } from "./Headline";
import styles from "./Hero.module.css";

type Props = { eyebrow: string; lines: string[]; lead: string; large?: boolean; children?: ReactNode };

export function Hero({ eyebrow, lines, lead, large, children }: Props) {
  const appear = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE_OUT, delay },
  });

  return (
    <section className={styles.hero}>
      <motion.p className={styles.eyebrow} {...appear(0)}>
        {eyebrow}
      </motion.p>
      <Headline lines={lines} className={large ? styles.large : styles.title} />
      <motion.p className={styles.lead} {...appear(0.45)}>
        {lead}
      </motion.p>
      {children && <motion.div {...appear(0.6)}>{children}</motion.div>}
    </section>
  );
}
