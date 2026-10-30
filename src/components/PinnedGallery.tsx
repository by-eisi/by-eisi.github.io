import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Shot } from "../data/games";
import styles from "./PinnedGallery.module.css";

/** Stays pinned while vertical scrolling moves the pictures sideways. */
export function PinnedGallery({ shots }: { shots: Shot[] }) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const measure = () => {
      if (track.current) {
        setDistance(Math.max(track.current.scrollWidth - window.innerWidth, 0));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  if (reduced) {
    return (
      <div className={styles.plain}>
        {shots.map((shot) => (
          <img key={shot.src} src={shot.src} alt={shot.alt} loading="lazy" />
        ))}
      </div>
    );
  }

  return (
    <section ref={section} className={styles.section}>
      <div className={styles.sticky}>
        <motion.div ref={track} className={styles.track} style={{ x }}>
          {shots.map((shot) => (
            <img key={shot.src} src={shot.src} alt={shot.alt} loading="lazy" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
