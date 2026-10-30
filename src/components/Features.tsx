import { motion } from "motion/react";
import type { Feature } from "../data/games";
import { EASE_OUT } from "../lib/motion";
import styles from "./Features.module.css";

export function Features({ features }: { features: Feature[] }) {
  return (
    <div className={styles.grid}>
      {features.map((feature, index) => (
        <motion.article
          key={feature.title}
          className={styles.card}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: (index % 2) * 0.1 }}
        >
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </motion.article>
      ))}
    </div>
  );
}
