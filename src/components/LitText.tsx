import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import styles from "./LitText.module.css";

/** Word by word the text lights up while the section scrolls past. */
export function LitText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className={styles.text} aria-label={text}>
      {words.map((word, index) => (
        <Word key={index} word={word} progress={scrollYProgress} from={index / words.length} to={(index + 1) / words.length} />
      ))}
    </p>
  );
}

type WordProps = { word: string; progress: MotionValue<number>; from: number; to: number };

function Word({ word, progress, from, to }: WordProps) {
  const opacity = useTransform(progress, [from, to], [0.16, 1]);
  return (
    <motion.span aria-hidden="true" className={styles.word} style={{ opacity }}>
      {word}
    </motion.span>
  );
}
