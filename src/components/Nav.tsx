import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { STUDIO } from "../lib/motion";
import styles from "./Nav.module.css";

/** Glass bar that gains its edge once the page has moved. */
export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 8));

  return (
    <motion.header
      className={styles.bar}
      data-scrolled={scrolled}
      initial={{ y: -48 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.inner}>
        <Link className={styles.brand} to="/">
          {STUDIO}
        </Link>
        <nav aria-label="Hauptnavigation" className={styles.links}>
          <Link to="/#spiele">Spiele</Link>
          <Link to="/#studio">Studio</Link>
        </nav>
      </div>
    </motion.header>
  );
}
