import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import type { Game } from "../data/games";
import { EASE_OUT } from "../lib/motion";
import styles from "./GameTile.module.css";

const MotionLink = motion.create(Link);

/** Follows the pointer with a soft light, the picture drifts while scrolling. */
export function GameTile({ game, index }: { game: Game; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const picture = game.cover ?? game.image;

  const followPointer = (event: MouseEvent<HTMLAnchorElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - box.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - box.top}px`);
  };

  return (
    <MotionLink
      ref={ref}
      to={`/spiele/${game.slug}`}
      className={styles.tile}
      data-wide={game.wide}
      data-dark={game.dark}
      data-pixel={game.pixel}
      onMouseMove={followPointer}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay: (index % 2) * 0.08 }}
    >
      <div className={styles.text}>
        <p className={styles.status}>{game.status}</p>
        <h3 className={styles.name}>{game.name}</h3>
        <p className={styles.lead}>{game.lead}</p>
        <span className={styles.more}>Mehr erfahren</span>
      </div>
      <div className={styles.picture}>
        <motion.img src={picture.src} alt={picture.alt} loading="lazy" style={{ y: imageY }} />
      </div>
    </MotionLink>
  );
}
