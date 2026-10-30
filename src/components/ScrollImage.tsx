import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Shot } from "../data/games";
import styles from "./ScrollImage.module.css";

type Props = { image: Shot; pixel?: boolean };

/** Grows from a framed card to its full width while it scrolls in. */
export function ScrollImage({ image, pixel }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.84, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [48, 0]);

  return (
    <figure ref={ref} className={styles.frame} data-pixel={pixel}>
      <motion.img className={styles.image} src={image.src} alt={image.alt} style={{ scale, y }} />
    </figure>
  );
}
