import { motion } from "motion/react";
import { EASE_OUT } from "../lib/motion";
import styles from "./Headline.module.css";

type Props = { lines: string[]; className?: string; delay?: number };

/** Words slide up out of a mask, one after the other. */
export function Headline({ lines, className, delay = 0.1 }: Props) {
  let index = 0;
  return (
    <h1 className={className} aria-label={lines.join(" ")}>
      {lines.map((line) => (
        <span key={line} className={styles.line} aria-hidden="true">
          {line.split(" ").map((word) => {
            const position = index++;
            return (
              <span key={position} className={styles.mask}>
                <motion.span
                  className={styles.word}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, ease: EASE_OUT, delay: delay + position * 0.07 }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
